# 🔒 Guia de Segurança - Landing Page @pytk_solutions

## Visão Geral

Este documento descreve todas as medidas de segurança implementadas na landing page para proteger contra vulnerabilidades comuns e ataques maliciosos.

## 📋 Proteções Implementadas

### 1. **Proteção contra XSS (Cross-Site Scripting)**

- **Sanitização de Strings**: Todas as entradas de usuário são sanitizadas para remover tags HTML perigosas
- **Content Security Policy (CSP)**: Implementada via meta tags e headers HTTP
- **Validação de URLs**: Apenas URLs com protocolos `http://` e `https://` são permitidas
- **Função `sanitizeString()`**: Remove caracteres especiais que podem ser usados em ataques XSS

```javascript
// Exemplo de uso
const userInput = "<script>alert('XSS')</script>";
const safe = Security.sanitizeString(userInput);
// Resultado: &lt;script&gt;alert(&#039;XSS&#039;)&lt;&#x2F;script&gt;
```

### 2. **Proteção contra Clickjacking**

- **X-Frame-Options**: Configurado como `SAMEORIGIN` para impedir que a página seja carregada em iframes
- **Função `preventClickjacking()`**: Verifica se a página está em um iframe e redireciona se necessário

```javascript
// Automaticamente executado na inicialização
if (window.self !== window.top) {
    window.top.location = window.self.location;
}
```

### 3. **Proteção contra CSRF (Cross-Site Request Forgery)**

- **Classe `CSRFProtection`**: Gera e valida tokens CSRF
- **Headers de Requisição**: Adiciona `X-Requested-With: XMLHttpRequest` em todas as requisições
- **Validação de Origem**: Verifica `Referrer-Policy` e `Origin` headers

```javascript
// Uso de CSRF Token
const token = Security.csrfProtection.getToken();
// Enviar token com formulários
```

### 4. **Proteção contra Injeção de Código**

- **Detecção de Padrões Maliciosos**: Monitora tentativas de injeção SQL, JavaScript, etc.
- **Função `detectInjectionAttempt()`**: Detecta padrões suspeitos em entradas
- **Bloqueio de Padrões Perigosos**: 
  - `<script>` tags
  - `javascript:` URIs
  - Event handlers (`onclick`, `onerror`, etc.)
  - `eval()` calls
  - `vbscript:` URIs
  - Data URIs maliciosas

```javascript
// Detecta tentativas de injeção
if (Security.detectInjectionAttempt(userInput)) {
    console.error('Tentativa de injeção detectada!');
    // Atividade registrada no securityMonitor
}
```

### 5. **Rate Limiting (Proteção contra Força Bruta)**

- **Classe `RateLimiter`**: Limita tentativas por IP/usuário
- **Configuração Padrão**: 5 tentativas por minuto
- **Uso em Formulários**: Previne ataques de força bruta

```javascript
// Verificar se uma ação é permitida
if (Security.rateLimiter.isAllowed('user-action')) {
    // Executar ação
} else {
    console.warn('Muitas tentativas. Tente novamente mais tarde.');
}
```

### 6. **Monitoramento de Segurança**

- **Classe `SecurityMonitor`**: Registra todas as atividades suspeitas
- **Logging de Eventos**: Cada tentativa de ataque é registrada com timestamp
- **Análise de Padrões**: Ajuda a identificar padrões de ataque

```javascript
// Acessar atividades registradas
const activities = Security.securityMonitor.getActivities();
console.log(activities);
```

### 7. **Headers de Segurança HTTP**

Todos os headers de segurança são configurados em:
- `index.html` (meta tags)
- `.htaccess` (Apache)
- `vercel.json` (Vercel)

**Headers Implementados:**

| Header | Valor | Propósito |
|--------|-------|----------|
| X-Content-Type-Options | nosniff | Previne MIME sniffing |
| X-Frame-Options | SAMEORIGIN | Previne clickjacking |
| X-XSS-Protection | 1; mode=block | Ativa proteção XSS do navegador |
| Strict-Transport-Security | max-age=31536000 | Força HTTPS |
| Content-Security-Policy | (veja CSP) | Controla recursos carregados |
| Referrer-Policy | strict-origin-when-cross-origin | Controla informações de referência |
| Permissions-Policy | geolocation=(), microphone=(), camera=() | Nega acesso a APIs sensíveis |

### 8. **Validação de Entrada**

Funções de validação disponíveis:

```javascript
// Validar email
if (Security.validateEmail(email)) {
    // Email válido
}

// Validar telefone
if (Security.validatePhone(phone)) {
    // Telefone válido
}

// Sanitizar e validar dados
const safeData = Security.validateAndSanitize({
    name: userInput,
    email: userEmail
});
```

### 9. **Requisições Seguras**

- **Função `secureRequest()`**: Wrapper seguro para fetch
- **Validação de URL**: Verifica se URL é válida antes de fazer requisição
- **Headers de Segurança**: Adiciona headers de segurança automaticamente
- **Tratamento de Erros**: Registra erros no securityMonitor

```javascript
// Fazer requisição segura
const data = await Security.secureRequest('https://api.example.com/data', {
    method: 'GET'
});
```

### 10. **Proteção de Arquivo**

- **`.htaccess`**: Bloqueia acesso a arquivos sensíveis (`.env`, `.json`, etc.)
- **Bloqueio de Diretórios**: Impede listagem de diretórios
- **Compressão GZIP**: Reduz tamanho de transferência

## 🛡️ Boas Práticas de Segurança

### Para Desenvolvedores

1. **Sempre Sanitize Entradas**: Use `Security.sanitizeString()` para qualquer entrada de usuário
2. **Valide URLs**: Use `Security.isValidUrl()` antes de redirecionar
3. **Use Rate Limiting**: Implemente `Security.rateLimiter` em ações críticas
4. **Monitore Atividades**: Verifique `Security.securityMonitor.getActivities()` regularmente
5. **Mantenha Dependências Atualizadas**: Hotmart widget e Google Analytics devem estar atualizados

### Para Administradores

1. **HTTPS Obrigatório**: Sempre use HTTPS em produção
2. **Certificados SSL**: Mantenha certificados válidos e atualizados
3. **Backups Regulares**: Faça backup dos arquivos regularmente
4. **Monitoramento**: Revise logs de segurança periodicamente
5. **Atualizações**: Mantenha servidor e software atualizados

## 🚨 Resposta a Incidentes

Se você suspeitar de um ataque:

1. **Verifique Logs**: Acesse `Security.securityMonitor.getActivities()`
2. **Identifique Padrão**: Procure por padrões de ataque
3. **Bloqueie IP**: Se necessário, bloqueie o IP no `.htaccess`
4. **Notifique Hotmart**: Se dados de pagamento foram comprometidos
5. **Mude Senhas**: Altere todas as senhas e tokens

## 📊 Auditoria de Segurança

### Checklist de Segurança

- [ ] HTTPS está habilitado
- [ ] Certificado SSL é válido
- [ ] Headers de segurança estão configurados
- [ ] CSP está funcionando
- [ ] Rate limiting está ativo
- [ ] Logs de segurança são monitorados
- [ ] Backups são feitos regularmente
- [ ] Dependências externas são atualizadas
- [ ] Não há dados sensíveis no código
- [ ] Permissões de arquivo estão corretas

## 🔐 Secrets e Configurações Sensíveis

**NUNCA** coloque no repositório:
- Chaves de API
- Tokens de acesso
- Senhas
- Informações de pagamento
- Dados pessoais

Use variáveis de ambiente (`.env`) para dados sensíveis.

## 📚 Recursos Adicionais

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)
- [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [HTTP Security Headers](https://securityheaders.com/)

## 📞 Suporte de Segurança

Para relatar vulnerabilidades ou problemas de segurança:

1. **NÃO** publique em issues públicas
2. Entre em contato com @pytk_solutions
3. Forneça detalhes técnicos do problema
4. Aguarde resposta antes de divulgar

---

**Última atualização**: Abril de 2026  
**Versão**: 1.0  
**Status**: ✅ Segurança Implementada
