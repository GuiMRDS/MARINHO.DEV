# MARINHO.DEV

Portfólio pessoal de **Guilherme Marinho**, desenvolvedor full stack com foco em back-end (.NET e Python), IA aplicada e segurança.

🌐 **[marinho-dev.vercel.app](https://marinho-dev.vercel.app)**

## Seções

- **Hero**: apresentação, foto e chamadas para projetos e contato
- **Sobre**: stack, linha do tempo da carreira, competências e formação
- **Projetos**: Nexus-AI, WebPrime Motors e Xedit em destaque, além de Biblioteca Virtual, FilmsPro, Banco Digital, Agente Agno, Vision Mind e Ransomware Shield
- **Contato**: WhatsApp, e-mail e redes

## Tecnologias

| Camada | Ferramentas |
| --- | --- |
| Framework | [Astro](https://astro.build) (site estático) |
| Estilo | [Tailwind CSS 3](https://v3.tailwindcss.com) via PostCSS + CSS global (`src/styles/global.css`) |
| Interação | JavaScript puro |
| Scroll suave | [Lenis](https://github.com/darkroomengineering/lenis) |
| Ícones | [Iconify](https://iconify.design) |
| Fontes | Oswald, Space Grotesk e Space Mono (Google Fonts) |
| Deploy | Vercel |

Animações, efeito *flashlight* e inclinação 3D nos cards respeitam `prefers-reduced-motion` e ficam desligados em telas touch.

## Rodando localmente

Pré-requisito: Node.js 22.12 ou superior.

```bash
npm install
npm run dev       # servidor de desenvolvimento em http://localhost:4321
npm run build     # gera o site estático em dist/
npm run preview   # serve o build localmente
```

## Estrutura

```
.
├── public/
│   ├── favicon.svg
│   └── images/               # foto de perfil e prints dos projetos
├── src/
│   ├── components/           # Header, Footer, cards de projeto, timeline etc.
│   ├── layouts/Layout.astro  # <head>, SEO e scripts externos
│   ├── pages/index.astro     # página única
│   └── styles/global.css     # Tailwind + estilos do design system
├── astro.config.mjs
├── tailwind.config.mjs       # cores, fontes e animações do tema
└── postcss.config.mjs
```

### Design system

- **Cores**: `primary` `#FF5C00`, `dark` `#050505`, `dark-surface` `#121212`, `muted` `#666666`
- **Tipografia**: `font-oswald` (títulos), `font-space` (texto), `font-mono` (rótulos)
- **Componentes base**: `.glass-panel`, `.flashlight-card`, `.project-card`, `.badge`, `.status-badge`

## Contato

- LinkedIn: [guilherme-marinho04](https://www.linkedin.com/in/guilherme-marinho04/)
- GitHub: [@GuiMRDS](https://github.com/GuiMRDS)
- E-mail: [guimars22@gmail.com](mailto:guimars22@gmail.com)
