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

Base local isolada para o portfólio profissional pessoal do Dyllan. A interface está sendo
construída para receber currículo, experiências, projetos, competências, formação, certificações,
contatos e links reais depois da validação do proprietário.

## Estado atual

- **Ambiente:** local, sem domínio e sem publicação.
- **Idioma de trabalho:** PT-BR; PT-BR + inglês é decisão pendente.
- **Conteúdo:** estrutura visual pronta; fatos profissionais ainda não foram fornecidos/aprovados.
- **Currículo:** rota `/curriculo` preparada para impressão; exportação PDF fica bloqueada até a
  aprovação do conteúdo factual.
- **Analytics e integrações:** não configurados.
- **Ativos de marca:** nenhum logo, foto ou imagem inventada foi adicionada.

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

Não publicar esta base antes de definir, na sessão do Dyllan:

1. nome profissional e posicionamento;
2. contatos públicos, LinkedIn, GitHub e demais links;
3. currículo-base, formação e certificações reais;
4. três a cinco experiências/projetos publicáveis;
5. domínio-alvo e idioma inicial;
6. autorização explícita para o ambiente de publicação.

O inventário completo está em [`docs/content-contract.md`](docs/content-contract.md) e o gate de
publicação em [`docs/publish-gate.md`](docs/publish-gate.md).
