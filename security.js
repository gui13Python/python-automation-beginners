// ============================================
// SEGURANÇA - PROTEÇÃO CONTRA VULNERABILIDADES
// ============================================

/**
 * Sanitiza strings para prevenir XSS (Cross-Site Scripting)
 * Remove tags HTML perigosas e caracteres especiais
 */
function sanitizeString(str) {
    if (typeof str !== 'string') return '';
    
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
        '/': '&#x2F;'
    };
    
    return str.replace(/[&<>"'\/]/g, (char) => map[char]);
}

/**
 * Valida URLs para prevenir javascript: e data: URIs
 */
function isValidUrl(url) {
    try {
        const urlObj = new URL(url);
        // Apenas permite http e https
        return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
    } catch (e) {
        return false;
    }
}

/**
 * Previne clickjacking verificando se a página está em um iframe
 */
function preventClickjacking() {
    if (window.self !== window.top) {
        window.top.location = window.self.location;
    }
}

/**
 * Desabilita right-click para proteção adicional (opcional)
 */
function disableRightClick() {
    document.addEventListener('contextmenu', (e) => {
        // Comentado por padrão - descomente se necessário
        // e.preventDefault();
        // console.log('Right-click desabilitado');
    });
}

/**
 * Protege contra ataques de força bruta em formulários
 */
class RateLimiter {
    constructor(maxAttempts = 5, windowMs = 60000) {
        this.maxAttempts = maxAttempts;
        this.windowMs = windowMs;
        this.attempts = {};
    }

    isAllowed(key) {
        const now = Date.now();
        
        if (!this.attempts[key]) {
            this.attempts[key] = [];
        }

        // Remove tentativas antigas
        this.attempts[key] = this.attempts[key].filter(
            time => now - time < this.windowMs
        );

        if (this.attempts[key].length < this.maxAttempts) {
            this.attempts[key].push(now);
            return true;
        }

        return false;
    }

    reset(key) {
        delete this.attempts[key];
    }
}

const rateLimiter = new RateLimiter(5, 60000); // 5 tentativas por minuto

/**
 * Valida entrada de email
 */
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email) && email.length <= 254;
}

/**
 * Valida entrada de telefone
 */
function validatePhone(phone) {
    const re = /^[\d\s\-\(\)\+]+$/;
    return re.test(phone) && phone.length >= 10 && phone.length <= 20;
}

/**
 * Remove scripts inline maliciosos
 */
function sanitizeHTML(html) {
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
}

/**
 * Protege contra CSRF (Cross-Site Request Forgery)
 * Gera e valida tokens CSRF
 */
class CSRFProtection {
    constructor() {
        this.token = this.generateToken();
    }

    generateToken() {
        return Array.from(crypto.getRandomValues(new Uint8Array(32)))
            .map(b => b.toString(16).padStart(2, '0'))
            .join('');
    }

    getToken() {
        return this.token;
    }

    validateToken(token) {
        return token === this.token;
    }

    refreshToken() {
        this.token = this.generateToken();
        return this.token;
    }
}

const csrfProtection = new CSRFProtection();

/**
 * Monitora atividades suspeitas
 */
class SecurityMonitor {
    constructor() {
        this.suspiciousActivities = [];
        this.maxActivities = 100;
    }

    logActivity(type, details) {
        const activity = {
            timestamp: new Date().toISOString(),
            type: type,
            details: details,
            userAgent: navigator.userAgent,
            referrer: document.referrer
        };

        this.suspiciousActivities.push(activity);

        // Manter apenas as últimas 100 atividades
        if (this.suspiciousActivities.length > this.maxActivities) {
            this.suspiciousActivities.shift();
        }

        console.warn('Atividade registrada:', activity);
    }

    getActivities() {
        return this.suspiciousActivities;
    }

    clearActivities() {
        this.suspiciousActivities = [];
    }
}

const securityMonitor = new SecurityMonitor();

/**
 * Detecta e bloqueia tentativas de injeção
 */
function detectInjectionAttempt(input) {
    const injectionPatterns = [
        /<script[^>]*>.*?<\/script>/gi,
        /javascript:/gi,
        /on\w+\s*=/gi,
        /eval\(/gi,
        /expression\(/gi,
        /vbscript:/gi,
        /data:text\/html/gi
    ];

    for (let pattern of injectionPatterns) {
        if (pattern.test(input)) {
            securityMonitor.logActivity('INJECTION_ATTEMPT', {
                input: sanitizeString(input),
                pattern: pattern.toString()
            });
            return true;
        }
    }

    return false;
}

/**
 * Protege contra ataques de timing
 */
function secureCompare(a, b) {
    if (a.length !== b.length) {
        return false;
    }

    let result = 0;
    for (let i = 0; i < a.length; i++) {
        result |= a.charCodeAt(i) ^ b.charCodeAt(i);
    }

    return result === 0;
}

/**
 * Valida e sanitiza dados antes de enviar
 */
function validateAndSanitize(data) {
    const sanitized = {};

    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            const value = data[key];

            // Detecta tentativas de injeção
            if (detectInjectionAttempt(value)) {
                console.error(`Tentativa de injeção detectada em: ${key}`);
                continue;
            }

            // Sanitiza a string
            sanitized[key] = sanitizeString(value);
        }
    }

    return sanitized;
}

/**
 * Monitora eventos de segurança
 */
function setupSecurityEventListeners() {
    // Monitora tentativas de acesso ao console
    Object.defineProperty(window, 'console', {
        get() {
            securityMonitor.logActivity('CONSOLE_ACCESS', {
                timestamp: new Date().toISOString()
            });
            return window._console;
        }
    });

    // Protege contra modificação de window.location
    Object.defineProperty(window, 'location', {
        get() {
            return window._location;
        },
        set(value) {
            securityMonitor.logActivity('LOCATION_MODIFICATION_ATTEMPT', {
                newValue: value
            });
            // Não permite modificação
            return false;
        }
    });

    // Monitora erros não capturados
    window.addEventListener('error', (event) => {
        securityMonitor.logActivity('UNCAUGHT_ERROR', {
            message: event.message,
            filename: event.filename,
            lineno: event.lineno
        });
    });

    // Monitora promises rejeitadas
    window.addEventListener('unhandledrejection', (event) => {
        securityMonitor.logActivity('UNHANDLED_REJECTION', {
            reason: event.reason
        });
    });
}

/**
 * Inicializa todas as proteções de segurança
 */
function initializeSecurity() {
    console.log('%c🔒 Inicializando proteções de segurança...', 'color: #10b981; font-weight: bold;');

    // Previne clickjacking
    preventClickjacking();

    // Setup de event listeners de segurança
    setupSecurityEventListeners();

    // Valida que a página não está sendo carregada em um iframe
    if (window.self !== window.top) {
        console.warn('⚠️ Página detectada em iframe - possível clickjacking');
    }

    // Verifica se há extensões de navegador suspeitas
    if (window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
        console.log('ℹ️ React DevTools detectado');
    }

    console.log('%c✅ Proteções de segurança ativadas', 'color: #10b981; font-weight: bold;');
}

/**
 * Função segura para fazer requisições HTTP
 */
async function secureRequest(url, options = {}) {
    // Valida URL
    if (!isValidUrl(url)) {
        console.error('URL inválida:', url);
        return null;
    }

    // Adiciona headers de segurança
    const headers = {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        ...options.headers
    };

    try {
        const response = await fetch(url, {
            ...options,
            headers: headers,
            mode: 'cors',
            credentials: 'same-origin'
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        securityMonitor.logActivity('REQUEST_ERROR', {
            url: url,
            error: error.message
        });
        console.error('Erro na requisição:', error);
        return null;
    }
}

/**
 * Exporta funções de segurança para uso global
 */
window.Security = {
    sanitizeString,
    isValidUrl,
    validateEmail,
    validatePhone,
    sanitizeHTML,
    detectInjectionAttempt,
    validateAndSanitize,
    secureRequest,
    rateLimiter,
    csrfProtection,
    securityMonitor,
    initializeSecurity
};

// Inicializa segurança quando o DOM está pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initializeSecurity();
    });
} else {
    initializeSecurity();
}
