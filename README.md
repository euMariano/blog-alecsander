# 🎸 Alecsander Vitor's Music Cave - Retro Web Blog

[![Winamp](src/assets/img/badges/winamp.gif)](https://webamp.org)
[![Netscape 4.0](src/assets/img/badges/netscape_now_4_0.gif)](https://archive.org)
[![Neocities](src/assets/img/badges/neocities.gif)](https://neocities.org)
[![Geocities](src/assets/img/badges/geocities.gif)](https://geocities.restorativland.org)
[![Valid HTML 4.01](src/assets/img/badges/valid-html401.gif)](https://validator.w3.org)
[![Valid CSS](src/assets/img/badges/valid-css.gif)](https://jigsaw.w3.org/css-validator/)
[![Built with Notepad](src/assets/img/badges/built_with_microsoft_notepad.gif)](https://github.com)

> *"Bem-vindo ao meu cafofo musical! Um refúgio nostálgico dos anos 90/2000 (estilo Geocities/Neocities) dedicado ao Rock, Heavy Metal, Chiptune e raridades da boa música."*

---

## 📌 Visão Geral do Projeto

Este é o blog pessoal estático de **Alecsander Vitor**, construído para resgatar a estética expressiva e caótica da **Old Web (anos 90 e anos 2000)**, mas utilizando uma arquitetura moderna **Jamstack com custo estritamente zero (R$ 0,00)**.

O projeto conta com:
- **Hospedagem Gratuita:** Deploy contínuo e automático via GitHub Actions para o **GitHub Pages**.
- **Gerador de Site Estático (SSG):** **Eleventy (11ty)**, mantendo a geração em HTML puro, hiper veloz e sem frameworks pesados.
- **Área Administrativa Visual (CMS Git-based):** **Sveltia CMS** integrado na rota `/admin/`. Permite ao Alecsander criar, editar e excluir resenhas com upload de capas de álbuns diretamente pelo navegador via autenticação GitHub (PKCE), **sem necessidade de servidor proxy OAuth ou banco de dados pago**.
- **Player Retrô Winamp 2.91 (Webamp):** Emulador do clássico Winamp em HTML5 com trilhas em MP3 (incluindo o hino chiptune 8-bit exclusivo e o clássico áudio *"It really whips the llama's ass!"*).
- **Estética Neocities / Geocities:** Bordas chanfradas 3D (estilo Windows 95), texto verde terminal, `<marquee>` com notícias rolando, mural de botões 88x31 animados, GIFs de CDs girando, caveiras, chamas, faixas de construção e contador de acessos estilo odômetro.

---

## 🏗️ Estrutura de Diretórios

```text
blog-alecsander/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Pipeline de build e deploy automático para o GitHub Pages
├── src/
│   ├── _includes/
│   │   ├── base.njk              # Layout principal (frameset simulado, sidebar, header, footer)
│   │   └── post.njk              # Layout detalhado das resenhas de álbuns
│   ├── posts/
│   │   ├── posts.json            # Configuração padrão de permalink e layout para todos os posts
│   │   ├── 2026-10-20-black-sabbath-paranoid.md
│   │   ├── 2026-10-21-daft-punk-discovery.md
│   │   ├── 2026-10-22-iron-maiden-powerslave.md
│   │   └── 2026-10-23-nostalgia-chiptune-midi.md
│   ├── admin/
│   │   ├── index.html            # Ponto de entrada do Sveltia CMS (SPA 100% Client-Side)
│   │   └── config.yml            # Definição das coleções e campos editáveis pelo Alecsander
│   ├── assets/
│   │   ├── css/
│   │   │   └── retro-style.css   # Estilização completa retrô (Neocities / Windows 95)
│   │   ├── audio/
│   │   │   ├── retro-rock-anthem.mp3  # Trilha sonora Chiptune 8-bit para o Webamp
│   │   │   └── winamp-intro.mp3       # Áudio clássico do Winamp Llama
│   │   ├── img/
│   │   │   ├── badges/           # Botões clássicos 88x31 (Winamp, Netscape, Geocities, etc.)
│   │   │   ├── dividers/         # Linhas divisórias animadas (rainbow-line, fire-line)
│   │   │   ├── gifs/             # CDs girando, caveira, chamas, em construção
│   │   │   ├── uploads/          # Capas de álbuns e imagens enviadas pelo CMS
│   │   │   └── retro-cursor.png  # Cursor retrô personalizado
│   ├── index.njk                 # Página Inicial com destaques e feed de posts
│   ├── arquivo.njk               # Tabela cronológica com todas as resenhas
│   └── sobre.njk                 # Perfil do Alecsander Vitor, guitarras e preferências
├── eleventy.config.js            # Configuração do Eleventy (filtros de data, passthrough copy)
├── package.json                  # Dependências e scripts do projeto
├── .gitignore                    # Arquivos ignorados no Git (node_modules, _site)
└── README.md                     # Documentação oficial do projeto
```

---

## 🚀 Como Executar o Projeto Localmente

### 1. Pré-requisitos
- [Node.js](https://nodejs.org/) versão 18 ou superior instalada.

### 2. Instalação
Clone o repositório ou acesse a pasta do projeto:
```bash
git clone https://github.com/SEU-USUARIO/blog-alecsander.git
cd blog-alecsander
npm install
```

### 3. Servidor de Desenvolvimento Local
Inicie o Eleventy com recarga automática:
```bash
npm start
```
O blog estará disponível em: `http://localhost:8080/`
O painel administrativo estará acessível em: `http://localhost:8080/admin/`

### 4. Compilar para Produção
Para gerar a pasta estática `_site`:
```bash
npm run build
```

---

## ⚙️ Configuração Inicial para o Alecsander no GitHub

Para que o site seja publicado no seu GitHub Pages e você consiga publicar posts usando o painel Admin:

### Passo 1: Ajustar o repositório no arquivo `src/admin/config.yml`
Abra o arquivo `src/admin/config.yml` e ajuste a linha `repo:` com o seu usuário e nome do repositório no GitHub:
```yaml
backend:
  name: github
  repo: seu-usuario-github/blog-alecsander # Substitua aqui!
  branch: main
```

### Passo 2: Subir o código para o GitHub
```bash
git init
git add .
git commit -m "feat: Alecsander Vitor's Music Cave - Retro Web Blog inicializado"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/blog-alecsander.git
git push -u origin main
```

### Passo 3: Configurar as permissões no GitHub
1. No seu repositório no GitHub, clique na aba **Settings** (Configurações).
2. Vá em **Actions** &rarr; **General**.
3. Na seção **Workflow permissions**, selecione:
   - 🔘 **Read and write permissions**
   - Marque a caixa: ☑️ **Allow GitHub Actions to create and approve pull requests**
   - Clique em **Save**.
4. Vá em **Pages** (no menu lateral esquerdo de Settings):
   - Na opção **Build and deployment** &rarr; **Source**:
     - Se escolher **Deploy from a branch**: selecione a branch `gh-pages` e a pasta `/ (root)`.
     - Se escolher **GitHub Actions**: selecione o workflow de deploy do repositório.

Pronto! Assim que você der `git push`, o workflow em `.github/workflows/deploy.yml` compilará o site e o publicará gratuitamente no seu GitHub Pages!

---

## 🔐 Como o Alecsander Usa a Área Administrativa (CMS)

1. Acesse: `https://[seu-usuario].github.io/blog-alecsander/admin/`
2. Clique no botão azul **"Login with GitHub"**.
3. Autorize o aplicativo. O **Sveltia CMS** utiliza fluxo PKCE no cliente, sem custos nem servidores extras.
4. **Criando um novo post:**
   - Clique em **Postagens de Música** &rarr; **Nova Postagem**.
   - Preencha o **Título**, a **Data**, o **Artista em Destaque**, e clique no campo de imagem para fazer upload da **Capa do Álbum**.
   - Adicione os **Gêneros** (ex: *Hard Rock, Thrash Metal, Anos 80*).
   - Escreva o texto do review no editor Markdown (com suporte a formatação, citações e listas).
   - Clique em **Publicar** (Publish).
5. O CMS fará automaticamente um commit direto no seu repositório do GitHub. O GitHub Actions detectará a mudança e reconstruirá o site em segundos!

---

## 🕹️ Recursos Retrô em Destaque

- **📻 Winamp 2.91 Interativo:** Clique no botão *"▶ INICIAR WINAMP PLAYER"* na barra lateral para carregar a interface clássica do Winamp, trocar de faixa, ajustar equalizadores e curtir a trilha chiptune.
- **📟 Contador de Visitas:** Estilizado em LED vermelho de 7 segmentos estilo odômetro, complementado por API retrô.
- **🖼️ Galeria de Badges 88x31:** Botões clássicos preservados da era de ouro da web (Netscape, Internet Explorer, Winamp, Geocities, Neocities, Valid W3C).
- **💫 Animações da Old Web:** Divisores de fogo e arco-íris, GIFs de CDs girando e placas animadas de *"Under Construction"*.

---

*Criado com dedicação e nostalgia para Alecsander Vitor! Viva o bom e velho Rock 'n' Roll!* 🎸⚡
