// ============================================
// FUNÇÕES PRINCIPAIS
// ============================================

/**
 * Redireciona para o link de checkout do eBook (com widget Hotmart)
 */
function handleCheckoutEbook() {
    window.location.href = "https://pay.hotmart.com/X105571049V" ; // Link de checkout do eBook
   // O widget Hotmart será acionado automaticamente pelo onclick do link
    console.log('Redirecionando para eBook...');
}


function sumario(){

let box = document.getElementById("sumarioEbook");

if(box.style.display === "block"){
box.style.display = "none";
}else{
box.style.display = "block";
}

}

/**
 * Redireciona para o link de checkout do Curso
 */
function handleCheckoutCurso() {
    window.open("https://go.hotmart.com/A105072718R", '_blank',rel="noopener noreferrer"  ); // Abre em nova aba
}
function comprarvisto() {
    window.open("https://go.hotmart.com/A105072718R", '_blank',rel="noopener noreferrer"  ); // Abre em nova aba
}

function mostrarVideo() {
    document.getElementById("videoCurso").style.display = "block";

    setTimeout(function() {
        let botao = document.getElementById("botaovideoCurso");
        botao.style.display = "block";

        setTimeout(function(){
            botao.style.opacity = "1";
        }, 50);

    }, 5000);
}

/**
 * Atualiza a classe do navbar baseado no scroll
 */
function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

/**
 * Smooth scroll para seções (se houver links internos)
 */
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

/**
 * Adiciona animação de entrada aos elementos
 */
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar cards e seções
    document.querySelectorAll('.card, .learning-card, .bonus-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(element);
    });
}

/**
 * Adiciona efeito de hover nos botões
 */
function setupButtonEffects() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

/**
 * Adiciona efeito de parallax ao hero
 */
function setupParallax() {
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        if (hero) {
            hero.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
        }
    });
}

/**
 * Rastreia eventos de clique para analytics (opcional)
 */
function setupAnalytics() {
    // Rastrear cliques em botões de checkout
    document.querySelectorAll('[onclick="handleCheckout()"]').forEach(button => {
        button.addEventListener('click', function() {
            console.log('Checkout button clicked');
            // Aqui você pode adicionar código de tracking do Google Analytics, Hotmart, etc.
        });
    });
}

/**
 * Detecta dispositivo móvel
 */
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * Otimiza performance em dispositivos móveis
 */
function optimizeForMobile() {
    if (isMobileDevice()) {
        // Reduzir animações em dispositivos móveis
        document.documentElement.style.setProperty('--transition', 'all 0.15s ease');
    }
}

/**
 * Inicializa todas as funcionalidades
 */
function init() {
    console.log('Inicializando landing page...');
    
    // Setup de eventos
    window.addEventListener('scroll', handleNavbarScroll);
    setupSmoothScroll();
    setupIntersectionObserver();
    setupButtonEffects();
    setupParallax();
    setupAnalytics();
    optimizeForMobile();
    
    console.log('Landing page inicializada com sucesso!');
}

// ============================================
// EXECUTAR QUANDO O DOM ESTIVER PRONTO
// ============================================

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ============================================
// FUNÇÕES ADICIONAIS ÚTEIS
// ============================================

/**
 * Função para adicionar classe de ativo ao link de navegação
 */
function setActiveNavLink() {
    const currentLocation = location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });
}

/**
 * Função para copiar texto para clipboard
 */
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Texto copiado: ' + text);
        // Mostrar notificação de sucesso (opcional)
        showNotification('Copiado para a área de transferência!');
    }).catch(err => {
        console.error('Erro ao copiar: ', err);
    });
}

/**
 * Função para mostrar notificações
 */
function showNotification(message, duration = 3000) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        font-weight: 600;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, duration);
}

/**
 * Função para rastrear tempo de permanência na página
 */
function trackTimeOnPage() {
    let startTime = Date.now();
    
    window.addEventListener('beforeunload', () => {
        let timeOnPage = Math.round((Date.now() - startTime) / 1000);
        console.log(`Tempo na página: ${timeOnPage} segundos`);
        // Enviar para analytics se necessário
    });
}

/**
 * Função para validar email
 */
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/**
 * Função para formatar moeda
 */
function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

// ============================================
// ESTILOS DE ANIMAÇÃO ADICIONAIS
// ============================================

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// CONSOLE LOG PARA DEBUG
// ============================================

console.log('%c@pytk_solutions', 'color: #3b82f6; font-size: 24px; font-weight: bold;');
console.log('%cAutomação com Python para Iniciantes', 'color: #60a5fa; font-size: 16px;');
console.log('%cLanding Page v1.0', 'color: #94a3b8; font-size: 12px;');
