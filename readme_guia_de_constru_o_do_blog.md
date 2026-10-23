# 🎸 Alecsander Vitor's Music Cave - Retro Web Blog

## 📌 Visão Geral do Projeto
Este projeto é um blog de música estático com uma estética fortemente inspirada na "Old Web" (anos 90/2000, Geocities, Neocities, Y2K). 
O objetivo é ter um ambiente nostálgico, mas construído com tecnologias modernas (Jamstack) para garantir **hospedagem gratuita (GitHub Pages)** e uma **área administrativa funcional (Git-based CMS)** para o autor (Alecsander Vitor) criar, editar e excluir postagens sem precisar lidar com código.

---

## 🏗️ Arquitetura e Tech Stack (Custo Zero)

Para que o Antigravity construa isso corretamente, siga esta stack rigorosamente:

*   **Hospedagem:** GitHub Pages (Deploy automático via GitHub Actions).
*   **Gerador de Site Estático (SSG):** **Astro** ou **Eleventy (11ty)**. Recomenda-se o Eleventy pela simplicidade e proximidade com HTML puro, ideal para a estética retrô.
*   **Banco de Dados / Conteúdo:** Arquivos Markdown (`.md`) armazenados no próprio repositório.
*   **Área Administrativa (CMS):** **Sveltia CMS** ou **Decap CMS**. 
    *   *Nota para o Antigravity:* Use o Sveltia CMS (uma alternativa moderna e 100% compatível com as configs do Decap CMS). A vantagem do Sveltia é que ele permite autenticação no GitHub Pages puramente no client-side (PKCE), dispensando a necessidade de um servidor proxy OAuth (o que mantém o custo estritamente em zero e a arquitetura simples).
*   **Estilização:** CSS Puro (Vanilla CSS). Sem frameworks como Tailwind ou Bootstrap, para manter o código fiel à época, utilizando tabelas (ou CSS Grid simulando tabelas), bordas chanfradas (outset/inset) e cursores personalizados.

---

## 📁 Estrutura de Diretórios Planejada

O Antigravity deve estruturar o projeto da seguinte forma:

```text
/
├── .github/workflows/
│   └── deploy.yml            # Script de build e deploy para o GitHub Pages
├── src/
│   ├── _includes/            # Layouts base (header, footer, sidebar)
│   ├── posts/                # Arquivos Markdown do blog gerados pelo CMS
│   ├── admin/
│   │   ├── index.html        # Ponto de entrada do Sveltia/Decap CMS
│   │   └── config.yml        # Configuração das coleções e campos do CMS
│   ├── assets/
│   │   ├── css/              # retro-style.css
│   │   ├── fonts/            # Fontes customizadas (se não via CDN)
│   │   └── img/              # GIFs, backgrounds, banners 88x31
│   └── index.html            # Página inicial
├── package.json              # Dependências do SSG
└── README.md                 # Este documento
```

---

## 🎨 Guia de Estética (A "Vibe" Neocities)

O design não pode ser limpo ou minimalista. Ele deve ser caótico, expressivo e nostálgico. O Antigravity deve implementar os seguintes elementos:

### 1. Paleta de Cores
*   **Background:** Preto (`#000000`) ou uma imagem de fundo em mosaico (tiling) de espaço estrelado.
*   **Texto Principal:** Verde terminal (`#00FF00`) ou Cinza claro (`#CCCCCC`).
*   **Links:** Azul vibrante (`#0000FF`) e roxo quando visitados (`#800080`).
*   **Bordas:** Estilo `ridge`, `groove`, `inset` ou `outset` com espessura de `3px` a `5px` em cinza (estilo Windows 95/98).

### 2. Tipografia
*   **Títulos:** `Comic Sans MS`, `Impact` ou Google Font `Press Start 2P`.
*   **Corpo do texto:** `Courier New`, `Times New Roman` ou Google Font `VT323`.
*   *Nota:* Adicionar `text-shadow: 2px 2px 0px #000;` para destacar textos sobre fundos complexos.

### 3. Recursos Visuais Obrigatórios (Para buscar via wget/curl/CDN)
O HTML final deve conter tags `<img>` apontando para estes clássicos:
*   **Backgrounds:** Fundos repetitivos (estrelas, chamas, matriz).
*   **Divisores (HR):** Linhas horizontais substituídas por GIFs (ex: arco-íris, fogo, notas musicais desfilando).
*   **Banners 88x31:** No rodapé ou menu lateral (ex: `valid-html4.gif`, `get-netscape.gif`, `best-viewed-800x600.gif`).
*   **GIFs Decorativos:** Caveiras girando, CDs rodando (`spinning-cd.gif`), ícone de "Under Construction" (Em construção).
*   *Fonte recomendada:* `gifcities.org` e repositórios do Internet Archive.

### 4. Componentes Interativos Retro
*   **Webamp:** O player de música oficial do blog.
    *   *Implementação:* Injetar o script via CDN (`https://unpkg.com/webamp`).
    *   *Configuração:* Carregar um array de músicas em MP3 (hospedadas na pasta `/assets/audio`) para tocar no player estilo Winamp na tela inicial.
*   **Hit Counter:** Um contador de visitas estilo odômetro antigo.
    *   *Implementação:* Usar uma API de imagem de contador de visitas grátis (ex: `https://count.getloli.com/` ou `hitwebcounter.com`) inserida via tag `<img>`.
*   **Marquee:** Uso da clássica tag `<marquee>` para textos rolando (ex: "Bem-vindo ao meu cafofo musical!").

---

## ⚙️ Configuração do CMS (admin/config.yml)

Para o Alecsander conseguir postar, o Antigravity deve gerar a seguinte configuração para o CMS:

```yaml
backend:
  name: github
  repo: usuario-do-alecsander/nome-do-repo # O Antigravity deve ajustar isso
  branch: main
  # Sveltia CMS suporta PKCE para GitHub Pages sem servidor externo!

media_folder: "src/assets/img/uploads"
public_folder: "/assets/img/uploads"

collections:
  - name: "blog"
    label: "Postagens de Música"
    folder: "src/posts"
    create: true
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
    fields:
      - {label: "Título", name: "title", widget: "string"}
      - {label: "Data da Publicação", name: "date", widget: "datetime"}
      - {label: "Banda/Artista em Destaque", name: "artist", widget: "string", required: false}
      - {label: "Capa do Álbum/Post", name: "thumbnail", widget: "image", required: false}
      - {label: "Gênero", name: "tags", widget: "list"}
      - {label: "Review / Conteúdo", name: "body", widget: "markdown"}
```

---

## 🚀 Passo a Passo da Implementação para o Antigravity

1.  **Setup Inicial:** Inicializar um projeto Node.js vazio e instalar o SSG (Eleventy ou Astro).
2.  **Estrutura de Pastas:** Criar a estrutura listada na seção 📁.
3.  **Desenvolvimento do Layout (CSS/HTML):** 
    *   Criar o `index.html` com o layout de frameset simulado (Sidebar à esquerda, conteúdo principal à direita).
    *   Adicionar as tags `<marquee>`, os banners 88x31 e vincular os GIFs dos anos 90.
4.  **Integração do Webamp:** Colocar o script do Webamp no rodapé do `index.html` e apontar para pelo menos um arquivo `.mp3` de teste.
5.  **Setup do CMS:**
    *   Criar a pasta `/admin`.
    *   Adicionar o `index.html` importando o script do Sveltia CMS (`https://unpkg.com/@sveltia/cms/dist/sveltia-cms.js`).
    *   Criar o arquivo `config.yml` mapeando a coleção de posts.
6.  **Páginas Dinâmicas:** Configurar o SSG para ler os arquivos `.md` da pasta `/posts` e gerar uma página HTML para cada post, aplicando o layout retrô.
7.  **Deploy Pipeline:** Criar o arquivo `.github/workflows/deploy.yml` configurado para compilar o site e enviar os arquivos estáticos para a branch `gh-pages` (habilitando o GitHub Pages no repositório).

---

## 🔒 Instruções de Login para o Alecsander
Após o deploy feito pelo Antigravity, Alecsander deverá:
1. Acessar `https://[seu-usuario].github.io/[nome-do-repo]/admin`.
2. Clicar em "Login with GitHub".
3. Autorizar o aplicativo.
4. Usar a interface gráfica para escrever seus reviews, adicionar capas de álbuns (upload de imagem) e publicar. O sistema fará o resto!