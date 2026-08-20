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

- Hero inspirado na referência enviada: retrato real central, cópias laterais e CTA de currículo.
- Página inicial com perfil, áreas de atuação, Digytron, experiência, competências, método e contato.
- Rota `/curriculo` com leitura factual, responsividade e ação de impressão/Salvar como PDF.
- Estados `PENDENTE` visíveis apenas onde faltam datas, cargo preferido, certificados e cases.
- Foto real fornecida pelo Dyllan em `public/assets/`; nenhum logo ou imagem inventada.

## Fase 3 — validação

- `typecheck`, `lint` e `build`.
- Inspeção visual em desktop e viewport estreita de 390px.
- Checagem de overflow, foco, áreas de toque e impressão.
- Revisão manual de todas as frases que possam soar como experiência profissional.

## Fase 4 — conteúdo e publicação

O currículo-base e a foto já foram incorporados como primeira consolidação. A publicação só começa
após aprovação do posicionamento, revisão das datas/certificados/cases, definição de domínio e
autorização explícita do Dyllan. Esta rodada não publica.
