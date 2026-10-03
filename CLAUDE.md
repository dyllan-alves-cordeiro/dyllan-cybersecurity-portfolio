<!-- DGX:ADAPTER:CLAUDE -->
<!-- DGX:COMMON-BOOTSTRAP-GRANT:START -->
BOOTSTRAP GRANT

Nada antes de ler. O soberano é o repositório `sovereign-system` (`~/Workspace/sovereign-system`); em qualquer outro
repositório do parque ele é outro repo, e aqui só mora o adaptador local. A entrada canônica é o
`protocols/bootstrap.md` do `sovereign-system`; ela aponta para a função e para a rota entregue ao harness. A
constituição, os protocolos e as specs do `sovereign-system` são a doutrina que a função deve consultar.

`reading_gate.status: COMPLETE` é a prova de que a leitura de boot foi entregue. Ausência, `INCOMPLETE` ou
`UNPROVEN` recusa a entrada com `READING_GATE_INCOMPLETE`. Este bloco prova leitura recebida; nunca é
`ExecutionGrant`, nunca concede escrita e não substitui `AUTHORIZED_WRITE`, `WRITE_SCOPE`, validação, commit ou
push.

Com o MCP conectado, a doutrina chega pelo `dgx.ready`/`dgx.read`: os caminhos de doutrina citados em qualquer
adaptador são endereço, não ordem de leitura. Não releia pelo shell (`cat`, `sed`, `rg`) o que o gate já entregou.
Shell para doutrina é fallback, só quando o MCP não entregar (sem MCP, `dgx.ready` falhou, página recusada ou
`reading_gate` sem `COMPLETE`), e o fallback é declarado no relatório. O código e os testes da missão se leem
normalmente.

O fechamento segue o `protocols/close.md` do `sovereign-system`: checkpoint transporta continuidade e Session Close
encerra quando o dono quiser. O cartão, o Envelope e o readout de close usam o mesmo nome `BOOTSTRAP GRANT`; cada
transporte continua responsável por declarar sua própria prova.

Executor headless declara a fase em que está, quando ela muda, por `dgx.round {action:"checkpoint",
structured_checkpoint:{stage, current_action, next_action, ...}}`: `READING` ao terminar o boot, `IMPLEMENTING`
antes da primeira escrita, `VALIDATING` e `GIT_CLOSING` ao fechar. O Envelope carimba a chamada exata. Fase
declarada não é entrega: a prova continua sendo Git e régua.
<!-- DGX:COMMON-BOOTSTRAP-GRANT:END -->

## Este repositório

| Fato | Valor |
|---|---|
| Tipo | Portfólio público do dono (segurança e engenharia de IA) |
| Surface/alias | `dyllan-cybersecurity-portfolio` |
| Domínio público | `dyllan-cybersecurity-portfolio.vercel.app` |
| Stack | Vite, React, TypeScript |
| Runtime/dev | `npm run dev`; prévia de produção com `npm run preview` |
| Publish alias | Nenhum; push na `main` publica pela Vercel |
| Cliente servido | Recrutadores e o próprio dono |
| Status | Ativo; página `/ai-engineering` com o caso de triagem governada |

## Comandos locais

- Typecheck: `npm run typecheck`
- Build: `npm run build`
- Lint: `npm run lint`
- Publish: push na `main` (Vercel).

## Mapa local

- `src/pages/`: páginas, inclusive `AiEngineeringPage.tsx`.
- `src/content-ai-engineering.ts`: texto e ledger de provas da página de IA.
- `public/`: arquivos estáticos.

## Armadilhas locais

- Repositório público: nada de CPF, localização, caminho local ou arquivo pessoal; `.dgx/` fica fora do git.
- Claim só com prova: o ledger diz PROVEN ou NOT PROVEN, nunca exagera.
- Push na `main` publica na hora.
