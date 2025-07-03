# 💻 Projeto Front-end - Vitrine de Produtos

Este projeto é uma aplicação frontend desenvolvida em **React** com **Vite** e **TypeScript**, que simula a vitrine de uma loja de produtos de tecnologia, conforme o desafio proposto pela Econverse.

📦 Organização
O projeto é dividido em componentes pequenos e específicos (como Header, Footer, Modal, Produtos).

Cada componente tem sua própria pasta com o arquivo .tsx e o .scss correspondente.

A URL da API é redirecionada por uma proxy configurada no Vite.

🖼️ Ícones SVG
Todos os ícones foram transformados em componentes React personalizados.

Existe um componente Icon.tsx que recebe o nome do ícone e renderiza o componente correto (ex: cart, user, heart).

🎨 Estilos
Os estilos usam SCSS com módulos (.module.scss) para evitar conflitos entre classes.

Um arquivo de variáveis central (variables.scss) define as cores, fontes e estilos padrão para o projeto.

## 🧑 Autor

**Matheus Almeida**  
GitHub: [https://github.com/matheusmirandaalmeida/3356-java-desafio-front]

---

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [SCSS Modules](https://sass-lang.com/)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- HTML5 / CSS3

---

## 📁 Estrutura do Projeto

```
src/
├── assets/                # Imagens e arquivos estáticos
├── components/            # Componentes React organizados por domínio
│   ├── Header/            # Cabeçalho completo (TopBar, Nav, Banners)
│   ├── ProductCard/
│   ├── ProductCarousel/
│   ├── ProductModal/
│   ├── Footer/            # Newsletter e informações do rodapé
│   └── ...
├── icons/                 # SVGs e ícones do projeto
├── styles/                # SCSS global e variáveis
│   └── variables.scss     # Cores, fontes, mixins
├── types/                 # Tipagens e interfaces
├── App.tsx                # Componente principal
└── main.tsx               # Ponto de entrada da aplicação
```

---

## 🧩 Funcionalidades

- ✅ Vitrine com produtos em carrossel e grid
- ✅ Filtro por categorias
- ✅ Modal com detalhes do produto
- ✅ Layout responsivo
- ✅ Requisição de produtos via `fetch`
- ✅ Estilização com SCSS e variáveis
- ✅ Ícones SVG customizados

---

## 📦 Instalação

1. **Clone o repositório**:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

2. **Instale as dependências**:

```bash
npm install

```
---

## 🧪 Rodando o Projeto Localmente

```bash
npm run dev
```

Abra no navegador: [http://localhost:5173](http://localhost:5173)

---

## 🔧 Compilação para Produção

```bash
npm run build
```

---

## 🌐 API Proxy

As requisições para o JSON dos produtos são feitas via proxy configurado no `vite.config.ts`:

```ts
server: {
  proxy: {
    '/api': {
      target: 'https://app.econverse.com.br',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, '')
    }
  }
}
```

---

## Observação

- A pasta `node_modules` **não está no repositório**.
- Todas as dependências estão listadas no `package.json`.
- Ao clonar o projeto, basta rodar `npm install`.

---

## 📝 Licença

Este projeto está sob a licença MIT.
