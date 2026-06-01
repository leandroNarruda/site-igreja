# Resumo rápido do projeto (`site-igreja`)

## Stack e base
- Next.js `16` + React `19` + TypeScript.
- Estilo com Tailwind (`src/app/globals.css`) e tokens de cor (`--cedar`, `--clay`, etc.).
- Ícones com `lucide-react`.
- Animações de scroll com `framer-motion`.

## Arquivos centrais
- Home: `src/app/page.tsx`
- Modal de campanha: `src/app/ConstructionCampaignModal.tsx`
- Layout/fonts globais: `src/app/layout.tsx`

## O que foi implementado até aqui
- Modal de campanha com:
  - Layout 2 colunas (imagens à esquerda, conteúdo à direita).
  - Divisória ondulada com faixa dourada em SVG.
  - Versão mobile em tela cheia.
  - Badge "Campanha de construção" com ícone de igreja.
  - Botão "Quero doar" com ícone de coração.
- Textos revisados para PT-BR (acentos, ortografia e consistência).
- Hero da home com imagem de fundo (`/fachada-otimizada.jpg`) + overlay de cor.
- Card "Próximo encontro" dinâmico por data/hora (fuso `America/Sao_Paulo`).
- Seção "Cultos e encontros":
  - Ordem: Sábado -> Quarta-feira -> Domingo.
  - Imagens por card (sábado/quarta/domingo), incluindo ajustes de recorte.
- Seção "Ministérios":
  - Fundos com imagens reais (`familia.jpg`, `jovens.jpg`, `criancas.jpg`, `ministerio-saude.jpg`).
  - Item "Estudo bíblico" trocado para "Saúde".
- Contato:
  - Botões de WhatsApp apontando para `https://wa.me/5541985154409`.
  - Embed de Google Maps no box de endereço.

## Assets locais usados (`public/`)
- `escolinha-otimizada.jpg`, `fachada-otimizada.jpg`
- `culto.jpg`, `recepcao.jpg`, `adoracao-infantil.jpg`
- `familia.jpg`, `jovens.jpg`, `criancas.jpg`, `ministerio-saude.jpg`

## Convenções práticas para continuar
- Preferir imagens locais em `public/` (evitar URLs externas quando possível).
- Para cards com imagem em `page.tsx`, usar `next/image`.
- Após mudanças: rodar `npm run lint`.
