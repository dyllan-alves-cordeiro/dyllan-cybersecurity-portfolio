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

- **Ambiente:** local, sem domínio e sem publicação.
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

Não publicar esta base antes de definir, na sessão do Dyllan:

1. aprovação do posicionamento e da descrição pública da Digytron;
2. revisão de datas finais, cargo preferido e certificados formais;
3. três a cinco experiências/projetos publicáveis com autorização e evidência;
4. GitHub e demais links públicos reais, se existirem;
5. domínio-alvo e idioma inicial;
6. autorização explícita para o ambiente de publicação.

O inventário completo está em [`docs/content-contract.md`](docs/content-contract.md) e o gate de
publicação em [`docs/publish-gate.md`](docs/publish-gate.md).
