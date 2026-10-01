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

Portfólio profissional pessoal do Dyllan. A interface recebe o currículo-base e a foto reais
fornecidos em 20/08/2026, com uma primeira consolidação da atuação técnica na Digytron BR.

**Dono:** GitHub e Vercel ficam **somente** em `dyllan-alves-cordeiro`. Nunca no time Digytron System.

## Estado atual

- **Ao vivo:** https://dyllan-cybersecurity-portfolio.vercel.app
- **Código:** https://github.com/dyllan-alves-cordeiro/dyllan-cybersecurity-portfolio
- **Ambiente:** Vercel no time pessoal `dyllan1` (conta `dyllan-alves-cordeiro`); GitHub ligado ao projeto; domínio próprio ainda pendente.
- **Idioma de trabalho:** PT-BR como padrão, com apresentação em inglês disponível pelo toggle global persistente.
- **Conteúdo:** PT-BR + inglês; /ai-engineering apresenta posicionamento AI, mapa de competências, cases DGX/Lecion sanitizados e maturidade factual. Certificados e resultados de produção não medidos continuam pendentes.
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

A versão bilíngue web foi publicada na Vercel pessoal nesta sessão. Continuam pendentes:

1. domínio próprio;
2. datas finais, cargo preferido e certificados formais;
3. métricas públicas de resultados dos cases DGX e Lecion;
4. GitHub pessoal de código, se existir além deste repositório do site;
5. companion público RAG + Evals (proposta, ainda não implementado). Os PDFs AI PT/EN estão em public/assets/dyllan-alves-ai-engineer-{pt,en}.pdf; o PDF cybersecurity anterior foi preservado.

O inventário completo está em [`docs/content-contract.md`](docs/content-contract.md) e o gate de
publicação em [`docs/publish-gate.md`](docs/publish-gate.md).
