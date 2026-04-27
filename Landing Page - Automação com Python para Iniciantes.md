# Landing Page - Automação com Python para Iniciantes

Uma landing page profissional e responsiva para venda do ebook "Automação com Python para Iniciantes" na plataforma Hotmart.

## 📁 Estrutura de Arquivos

```
ebook_automacao_html_css_js/
├── index.html          # Estrutura HTML da página
├── style.css           # Estilos CSS (responsivo)
├── script.js           # Interatividade e funcionalidades JavaScript
├── README.md           # Este arquivo
└── .gitignore          # Arquivos a ignorar no Git
```

## 🎯 Características

- ✅ **100% Responsivo**: Funciona perfeitamente em PC, tablet e celular
- ✅ **HTML/CSS/JS Puro**: Sem dependências externas, sem frameworks
- ✅ **Otimizado para Conversão**: Seções estratégicas para aumentar vendas
- ✅ **Animações Suaves**: Efeitos visuais que não prejudicam performance
- ✅ **SEO Friendly**: Estrutura semântica e meta tags
- ✅ **Performance**: Carregamento rápido, sem bibliotecas pesadas

## 📱 Seções da Página

1. **Navbar Fixa**: Navegação com logo e botão de compra
2. **Hero Section**: Headline impactante com CTA principal
3. **Problema/Solução**: Conexão emocional com o leitor
4. **O que você vai aprender**: 6 tópicos principais
5. **Bônus Exclusivos**: 4 bônus destacados
6. **Próximo Passo**: Convite para o curso em vídeo
7. **CTA Final**: Chamada para ação com preço
8. **Footer**: Links úteis e informações de contato

## 🚀 Como Usar

### Localmente

1. Clone ou baixe os arquivos
2. Abra `index.html` em seu navegador
3. Pronto! A página está funcionando

### Deploy no Vercel

1. Crie uma conta em [vercel.com](https://vercel.com)
2. Conecte seu repositório Git
3. Vercel detectará automaticamente os arquivos HTML/CSS/JS
4. Clique em "Deploy"
5. Sua página estará online em minutos!

### Deploy no GitHub Pages

1. Crie um repositório no GitHub
2. Faça push dos arquivos
3. Vá em Settings → Pages
4. Selecione "Deploy from a branch"
5. Escolha a branch `main`
6. Sua página estará online em `username.github.io/repo-name`

## 🔧 Personalização

### Alterar Link de Checkout

Abra `index.html` e procure por:
```javascript
onclick="handleCheckout()"
```

Edite a função em `script.js`:
```javascript
function handleCheckout() {
    window.location.href = "SEU_LINK_AQUI";
}
```

### Alterar Cores

Edite as variáveis CSS em `style.css`:
```css
:root {
    --primary-color: #3b82f6;
    --secondary-color: #8b5cf6;
    /* ... mais cores ... */
}
```

### Alterar Textos

Edite diretamente em `index.html`. Todos os textos estão bem organizados e comentados.

## 📊 Analytics e Tracking

Para adicionar Google Analytics ou Hotmart Tracking:

1. Abra `index.html`
2. Adicione seu código de tracking no `<head>` ou antes de `</body>`

Exemplo Google Analytics:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## 🎨 Design

- **Paleta de Cores**: Azul profissional com gradientes
- **Tipografia**: System fonts (rápido carregamento)
- **Layout**: Grid responsivo com max-width de 1200px
- **Animações**: Transições suaves com CSS e JavaScript

## 📈 Otimizações de Performance

- Sem imagens pesadas (apenas emojis)
- CSS minificado
- JavaScript otimizado
- Lazy loading para elementos fora da viewport
- Sem dependências externas

## 🔐 Segurança

- Sem scripts externos (exceto analytics)
- Sem coleta de dados pessoais
- HTTPS recomendado (Vercel fornece automaticamente)

## 📝 Checklist de Deploy

- [ ] Alterar link de checkout para seu link Hotmart
- [ ] Verificar textos e informações
- [ ] Testar responsividade em celular
- [ ] Testar todos os botões
- [ ] Adicionar Google Analytics (opcional)
- [ ] Configurar domínio customizado (opcional)
- [ ] Fazer push para Git
- [ ] Deploy no Vercel

## 🆘 Troubleshooting

### Página em branco
- Verifique se os 3 arquivos estão na mesma pasta
- Verifique o console do navegador (F12) para erros

### Botões não funcionam
- Verifique se `script.js` está sendo carregado
- Verifique o caminho do arquivo em `index.html`

### Estilos não aparecem
- Verifique se `style.css` está sendo carregado
- Limpe o cache do navegador (Ctrl+Shift+Delete)

## 📞 Suporte

Para dúvidas sobre a landing page, entre em contato com @pytk_solutions

## 📄 Licença

Todos os direitos reservados © 2026 @pytk_solutions

## 🎓 Recursos Úteis

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)
- [Vercel Docs](https://vercel.com/docs)

---

**Versão**: 1.0  
**Última atualização**: Abril de 2026  
**Autor**: @pytk_solutions
