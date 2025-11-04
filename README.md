# APP HC — Front-end (React + Vite + TypeScript + Tailwind)

## Integrantes 

- Eduardo Martins - RM562259
- Vitor Madrigrano - RM564191
- Thiago Sposito - RM561694

## Link do projeto

- https://github.com/Tidlle/Sprint3-FrontEnd.git

## Link para vídeo explicativo

- https://www.youtube.com/watch?v=yNKjbU3l8yo

---

## Requisitos
- **Node.js** 18 ou 20 (recomendado LTS)  
- **npm** 9+

Verifique:
```bash
node -v
npm -v
```

---

## Como rodar
```bash
npm install
npm run dev
```
- Acesse: `http://localhost:5173`

---

## Estrutura de pastas (organização atual)
```
src/
  components/
    Form/
      Input.tsx
      Textarea.tsx
    Card.tsx
    Header.tsx
    MenuButton.tsx
    NavBottom.tsx
  data/
  pages/
    Chat.tsx
    Contato.tsx
    FAQ.tsx
    Home.tsx
    IntegranteDetalhe.tsx
    Integrantes.tsx
    Sobre.tsx
    consultas/
      MinhasConsultas.tsx
      Detalhes.tsx
      Marcar.tsx
  routes/
    AppRoutes.tsx
  services/
    api.ts
  index.css
  main.tsx
  App.tsx
  theme.ts
public/
  logo.png (ou logo.svg)
```

---

## Rotas principais
| Caminho | Tela |
|---|---|
| `/` | Home (menu com 5 botões; “Quem Somos” ocupa 2 colunas) |
| `/consultas` | **Minhas Consultas** (título, mês com botões teal e calendário) |
| `/consultas/detalhes` | **Detalhes da(s) Consulta(s)** (cards brancos listando consultas) |
| `/consultas/marcar` | **Marcar uma Consulta** (formulário) |
| `/chat` | **Chat HC** (cartão com faixa teal, input e botão Enviar) |
| `/faq`, `/sobre`, `/contato` | Páginas auxiliares |
| `/integrantes`, `/integrantes/:id` | Lista e detalhe (exemplo) |

**Navegação fixa**  
- `Header.tsx`: logo à esquerda e **menu** (hambúrguer) à direita. Título do popover branco e itens na cor `#17A2A8`.  
- `NavBottom.tsx`: nav inferior **fixo** (`position: fixed`) com `z-50`. O `<main>` tem `pb-28 sm:pb-24` para não cobrir o conteúdo.

---

## Tema e Identidade (1:1)
Todas as cores/estilos ficam em **`src/index.css`** via _tokens_ CSS:

```css
:root {
  --bg-top:    #1e78b3;   /* azul superior */
  --bg-bottom: #186fa8;   /* azul inferior */
  --card:      #17a2a8;   /* teal dos tiles / botões */
  --on-surface:#ffffff;   /* textos brancos no herói */
  --on-muted:  rgba(255,255,255,0.9);
  --menu-fg:   #17A2A8;   /* cor dos itens do menu popover */
}
```
Utilitários prontos que usam os tokens:
- **Layout**: `bg-app` (gradiente), `container-app`  
- **Cartões**: `tile` (teal), `card-white` (card branco)  
- **Tipografia**: `text-hero`, `text-menu`  
- **Consultas**: `btn-teal-badge` (botão teal com quadrado azul interno)  
- **Alturas iguais** (páginas ≠ Home): `section-eq`

**Fonte e Logo**  
- Fonte: ative o `<link>` no `index.html` se usar Google Fonts.  
- Logo: troque `public/logo.png|svg` e atualize o caminho no `Header.tsx` se necessário.

---

## Integração com API (placeholder)
`src/services/api.ts` usa `VITE_API_BASE`:
```ts
const BASE = import.meta.env.VITE_API_BASE || ''
```
Crie `.env` se precisar:
```
VITE_API_BASE=http://localhost:8080
```

---

## Padronização de UI
- Título de páginas: `text-3xl md:text-3xl font-extrabold text-white` com _drop shadow_ suave.  
- Botões principais: fundo **teal** `#17a2a8`, texto branco, cantos arredondados.  
- “Quem Somos” na Home: bloco ocupando **duas colunas** (col-span).

---

## Roadmap curto (sugestões)
- `/consultas` conectado à API (marcação, listagem e cancelamento).  
- Estado do chat persistente e integração futura com backend.  
- Testes de acessibilidade (teclado, foco no menu popover).  
- Dark mode opcional via tokens.

---

