# Portfolio Pessoal - Kaua Almeida

Aplicacao de portfolio/link da bio com visual moderno, dark mode por padrao, layout responsivo e dados carregados via JSON.

## Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Como rodar o projeto

1. Instale as dependencias:

```bash
npm install
```

2. Rode em desenvolvimento:

```bash
npm run dev
```

3. Build de producao:

```bash
npm run build
```

4. Preview da build:

```bash
npm run preview
```

## Estrutura de imagens

As imagens estao organizadas em:

- `public/avatar`
- `public/projetos`
- `public/eventos`

Padrao de uso:

- Avatar: `/avatar/avatar.jpg`
- Projetos: `/projetos/nome-da-imagem.jpg`
- Eventos: `/eventos/nome-da-imagem.jpg`

## Como editar projetos

Arquivo: `src/data/projetos.json`

Cada item segue este formato:

```json
{
  "titulo": "Nome do projeto",
  "descricao": "Descricao curta",
  "imagem": "/projetos/imagem.jpg",
  "tecnologias": ["Python", "AWS"],
  "linkProjeto": "https://...",
  "linkGithub": "https://...",
  "destaque": true
}
```

Campos importantes:

- `destaque`: quando `true`, o card recebe destaque visual.
- `linkGithub`: pode ser vazio (`""`) se nao houver repositorio publico.

## Como editar eventos

Arquivo: `src/data/eventos.json`

Cada item segue este formato:

```json
{
  "titulo": "Nome do evento",
  "data": "Mes Ano",
  "local": "Cidade - UF",
  "descricao": "Resumo do evento",
  "imagem": "/eventos/imagem.jpg",
  "link": "https://...",
  "categoria": "tecnologia"
}
```

Campos importantes:

- `imagem` e obrigatorio.
- `link` e opcional (pode ser `""`).
- `categoria`: ex. `tecnologia`, `cloud`, `comunidade`.

## Como editar links da Hero

Arquivo: `src/App.jsx`

Atualize o array `SOCIAL_LINKS` com seus links reais de:

- LinkedIn
- GitHub
- Instagram
- Contato (WhatsApp ou email)
- Curriculo

## Deploy na Vercel

1. Suba o projeto para um repositorio no GitHub.
2. Acesse https://vercel.com e clique em **Add New Project**.
3. Importe o repositorio.
4. A Vercel detecta Vite automaticamente.
5. Use as configuracoes padrao:

- Build Command: `npm run build`
- Output Directory: `dist`

6. Clique em **Deploy**.

Sempre que fizer push na branch principal, a Vercel faz novo deploy automaticamente.

## Observacoes

- O projeto usa dados estaticos via JSON (sem banco de dados).
- As imagens atuais sao placeholders e podem ser substituidas pelos arquivos finais mantendo os mesmos caminhos.
