# 🚀 Portfólio - Hiago Cavalcante

Um portfólio moderno e responsivo construído com React, TypeScript e Material-UI, apresentando minhas habilidades como desenvolvedor front-end.

![Portfolio Preview](https://via.placeholder.com/800x400/1976d2/ffffff?text=Portfolio+Preview)

## ✨ Características

- 🎨 **Design Moderno**: Interface clean e profissional
- 🌙 **Modo Escuro/Claro**: Toggle entre temas
- 📱 **Totalmente Responsivo**: Funciona perfeitamente em todos os dispositivos
- ⚡ **Performance Otimizada**: Carregamento rápido e suave
- 🎭 **Animações Suaves**: Usando Framer Motion
- 📧 **Formulário de Contato**: Com validação e feedback
- 🧭 **Navegação Suave**: Scroll suave entre seções
- 🔧 **Código Limpo**: TypeScript para maior confiabilidade

## 🛠️ Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para interfaces
- **TypeScript** - Superset tipado do JavaScript
- **Material-UI (MUI)** - Biblioteca de componentes React
- **Framer Motion** - Biblioteca de animações
- **Vite** - Build tool e dev server
- **EmailJS** - Serviço de envio de emails

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/portifolio.git
cd portifolio
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
```bash
npm run dev
```

4. Acesse no navegador: `http://localhost:5173`

## 📦 Scripts Disponíveis

- `npm run dev` - Executa o projeto em modo de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Pré-visualiza a build de produção
- `npm run lint` - Executa o linter

## 🎯 Seções do Portfólio

### 🏠 Hero
- Apresentação pessoal com avatar
- Links para redes sociais
- Animação de fundo personalizada

### 👨‍💻 Sobre Mim
- Descrição profissional
- Experiência e objetivos

### 🛠️ Skills
- Tecnologias que domino
- Chips interativos com hover effects

### 📁 Projetos
- Showcase dos principais projetos
- Links para GitHub e demos ao vivo
- Cards responsivos com animações

### 📧 Contato
- Formulário funcional de contato
- Informações de contato
- Integração com EmailJS

## 🌟 Funcionalidades Especiais

### Modo Escuro/Claro
- Toggle automático baseado na preferência do sistema
- Salvamento da preferência no localStorage
- Transições suaves entre temas

### Navegação Responsiva
- Menu hambúrguer para dispositivos móveis
- Navegação suave entre seções
- Navbar fixa com backdrop blur

### Animações
- Entrada suave dos elementos
- Hover effects nos componentes
- Transições de página

## 🔧 Configuração do EmailJS

Para configurar o envio de emails:

1. Crie uma conta em [EmailJS](https://www.emailjs.com/)
2. Configure um serviço de email
3. Crie um template de email
4. Adicione suas credenciais no arquivo de contato:

```typescript
// src/pages/Home/Sections/Contact/ContactComponent.tsx
await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formData,
  'YOUR_PUBLIC_KEY'
);
```

## 📱 Responsividade

O portfólio é totalmente responsivo e funciona perfeitamente em:

- 📱 **Mobile**: 320px - 768px
- 📟 **Tablet**: 768px - 1024px
- 🖥️ **Desktop**: 1024px+

## 🎨 Paleta de Cores

- **Primary**: #1976d2 (Blue)
- **Secondary**: #dc004e (Pink)
- **Background Light**: #ffffff
- **Background Dark**: #121212

## 🚀 Deploy

### Vercel (Recomendado)

1. Faça push do código para GitHub
2. Conecte seu repositório no Vercel
3. Configure as variáveis de ambiente se necessário
4. Deploy automático!

### Netlify

1. Execute `npm run build`
2. Faça upload da pasta `dist` no Netlify
3. Configure redirecionamentos se necessário

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📧 Contato

**Hiago Cavalcante**
- 📧 Email: hiago@exemplo.com
- 💼 LinkedIn: [linkedin.com/in/hiago](https://linkedin.com/in/hiago)
- 🐱 GitHub: [github.com/hiago](https://github.com/hiago)

---

⭐ Se este projeto te ajudou, não esqueça de dar uma estrela no repositório!
