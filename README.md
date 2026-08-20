<!--
DGX FILE HEADER
nivel: L2-small
arquivo: README.md
papel: Porta de leitura do portfólio pessoal de cibersegurança.
modo: documentação operacional
validar: npm run build
-->
<!-- DGX:ANCHOR: personal-cybersecurity-portfolio-readme -->

# Portfólio pessoal de cibersegurança

Base local isolada para o portfólio profissional pessoal do Dyllan. A interface agora recebe o
currículo-base e a foto reais fornecidos em 20/08/2026, com uma primeira consolidação da atuação
técnica na Digytron.

## Estado atual

- **Ambiente:** GitHub + Vercel, com autorização explícita em 20/08/2026; domínio próprio ainda pendente.
- **Idioma de trabalho:** PT-BR; PT-BR + inglês é decisão pendente.
- **Conteúdo:** PT-BR, baseado no currículo-base e em documentação local de alto nível da Digytron;
  datas finais, cargo preferido, certificados e cases detalhados continuam pendentes.
- **Currículo:** rota `/curriculo` responsiva e preparada para impressão; `Salvar como PDF` abre a
  impressão do navegador em layout A4, sem gerar publicação automática.
- **Analytics e integrações:** não configurados.
- **Ativos visuais:** foto real fornecida pelo Dyllan em `public/assets/`; nenhum logo ou imagem inventada.

## Executar localmente

```bash
npm install
npm run dev
```

Validações disponíveis:

```bash
npm run typecheck
npm run lint
npm run build
```

## Limites de publicação

A primeira publicação em Vercel foi autorizada nesta sessão. Continuam pendentes:

1. domínio próprio;
2. datas finais, cargo preferido e certificados formais;
3. três a cinco cases detalhados com autorização e evidência;
4. GitHub pessoal de código, se existir além deste repositório do site;
5. versão em inglês, se for desejada.

O inventário completo está em [`docs/content-contract.md`](docs/content-contract.md) e o gate de
publicação em [`docs/publish-gate.md`](docs/publish-gate.md).
