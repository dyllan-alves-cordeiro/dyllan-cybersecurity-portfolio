<!--
DGX FILE HEADER
nivel: L2-small
arquivo: docs/implementation-plan.md
papel: Plano físico da primeira fatia do portfólio pessoal.
modo: plano de implementação
validar: git diff --check
-->
<!-- DGX:ANCHOR: personal-portfolio-implementation-plan -->

# Plano de implementação — portfólio pessoal

## Fase 1 — base segura

- Repositório local isolado em `new-chat/`.
- Stack mínima React + TypeScript + Vite.
- Nenhum segredo, analytics ou integração externa.
- Conteúdo factual separado de copy estrutural.

## Fase 2 — primeira fatia visual

- Página inicial com tese, áreas reservadas, método de case e CTA de currículo.
- Rota `/curriculo` com leitura linear e preparação de impressão.
- Estados `PENDENTE` visíveis onde faltam dados reais.
- Layout mobile-first, sem foto/logo/asset inventado.

## Fase 3 — validação

- `typecheck`, `lint` e `build`.
- Inspeção visual em desktop e viewport estreita de 390px.
- Checagem de overflow, foco, áreas de toque e impressão.
- Revisão manual de todas as frases que possam soar como experiência profissional.

## Fase 4 — conteúdo e publicação

Só começa após retorno do Dyllan com os fatos do contrato de conteúdo e decisão explícita de
domínio. A publicação não faz parte desta primeira fatia.
