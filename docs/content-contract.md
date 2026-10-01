<!--
DGX FILE HEADER
nivel: L2-medium
arquivo: docs/content-contract.md
papel: Fonte editorial dos claims públicos do portfólio pessoal.
modo: contrato de conteúdo
validar: revisão factual + npm run typecheck + npm run build
-->
<!-- DGX:ANCHOR: personal-portfolio-content-contract -->

# Contrato de conteúdo factual

Revisão 2026-10-01. Autoridade: envelope AI Engineering Portfolio Closure e autorização do Owner para a próxima etapa. A rota /ai-engineering é a entrada para candidaturas AI; o posicionamento cybersecurity continua disponível nas demais superfícies. Tradução não amplia claim.

## Identidade e carreira

| Claim | Status | Source | Public usage | Limitation |
|---|---|---|---|---|
| Nome Dyllan Alves Cordeiro, contatos e formação UNIDESC | OWNER_STATED | Currículo-base e materiais privados de carreira | Header, contatos, currículos | Documentos acadêmicos não revalidados nesta rodada |
| Telefone (61) 98642-9342 | OWNER_CONFIRMED | Envelope 01/10/2026 | Contato profissional e PDFs PT/EN | Não usar o número comercial da Digytron |
| Founder e full-stack engineer na Digytron BR | OWNER_STATED + PROVEN em mecanismos | Histórico profissional e implementações inspecionadas | Resumo e experiência | Datas anteriores herdadas; autoria de cada linha não inferida de Git |
| Suporte/redes em SKILL.NET, AGE e Stefanini | OWNER_STATED | Currículo-base | Histórico profissional | Não converter em AI Engineering ou cinco anos de desenvolvimento |
| Foto pessoal | OWNER_CONFIRMED | Arquivo fornecido 20/08/2026 | Home | Sem imagem pessoal inventada |
| GitHub/Vercel pessoal | PROVEN no repo | Remote e projeto existente | Código público deste site | Não usar organização Digytron |

## Evidence census — 2026-10-01

Fontes privadas são descritas em alto nível. Ledger completo e paths ficam nos materiais locais de carreira; não são publicados neste repo. PROVEN em código/teste local não significa resultado medido em produção.

| Claim | Status | Source | Public usage | Limitation |
|---|---|---|---|---|
| Server-side LLM, JWT, SQL context, SSE, PDF tools, credits/refund | PROVEN | Lecion fonte atual + 68 testes/typecheck locais | Case e currículo | Sem disponibilidade, adoção ou qualidade de resposta medida |
| History windows e workflow de compactação | PROVEN | Fonte e call site Lecion | Context engineering | Fidelidade de resumo/reinjeção e economia não medidas |
| Coordinator/Executor, routing, grants e receipts | PROVEN | Runtime/dispatch + 36 testes focados | Case DGX | Runtime próprio; sem sandbox universal |
| MCP/catalog/invoke e gates por conexão | PROVEN | Provider + MCP vivo + 13 testes focados | Capability map e case | Não implica transporte externo completo |
| Especificações e consistência narrativa | PARTIAL | Detectores + auditoria anterior + Pulse atual | Mecanismo implementado | Saúde global contém achados; não afirmar verde |
| Gateway PostgreSQL restrito e TLS verify-full | PROVEN na fonte | Gateway/config | Competência de dados | Runtime produtivo não sondado |
| RLS/papéis/isolamento | PARTIAL | Migrations | Controles de acesso implementados em código | Aplicação e enforcement live não medidos |
| 5+ anos como AI Engineer | NOT_PROVEN | Timeline Git e carreira | Não usar | Não inferir início de IA do período Digytron |
| 5+ anos software/infra/operações | OWNER_STATED | Currículo-base | Preferir descrição sem cifra | Suporte não vira desenvolvimento automaticamente |
| Vector RAG / embeddings / pgvector | NOT_PROVEN | Busca delimitada em aplicação/data | Somente roadmap | Estado global NOT_MEASURED |
| LLM response evaluation harness | NOT_PROVEN | Testes atuais são determinísticos | Somente roadmap | Não descrever como apenas “ainda não público” |
| RAG + Evals Lab | PLANNED | Proposta companion separada | Próximo projeto | Não implementado |
| Contato profissional | OWNER_CONFIRMED | Envelope 01/10/2026 | (61) 98642-9342 | Não substituir pelo WhatsApp comercial |


## Política de apresentação

- /ai-engineering usa headline AI Engineer/Engenheiro de IA, competências explicáveis e dois cases reais sanitizados: DGX Sovereign e Lecion.
- O case Lecion usa “LLM Application Engineering”; disponibilidade atual de produção não foi medida. História/compactação existem, mas fidelidade, reinjeção integral e economia de tokens não foram comprovadas.
- Testes determinísticos e negativos não são apresentados como LLM evals. Contagens publicadas têm data e escopo: Lecion 68; boundaries 36; MCP gates 13. Não representam saúde global.
- Retrieval SQL/web/documental e context assembly são linguagem atual. Embeddings, pgvector, hybrid retrieval e reranking aparecem somente no companion PLANNED.
- O currículo 0.3.0 é exportado em PT e EN com revisão factual sob o envelope. Não atribuir revisão pessoal das traduções ao Owner; dados biográficos herdados permanecem OWNER_STATED.
- Amadurecimento automatizado da doutrina continua PLANNED. Detectores de consistência implementados não comprovam esse loop completo.
- A rota /curriculo mantém o currículo cybersecurity e oferece downloads AI por idioma. O download primário na rota AI abre o PDF AI correspondente.

## Conteúdo excluído

Código proprietário, receipts internos, segredos, tokens, paths de operação, dados de clientes, nomes de clientes novos, endereço completo, dados familiares, certificações não validadas, proficiência em espanhol/inglês, métricas e resultados enterprise sem prova.

Space/OS sustentam apenas descrições arquiteturais sanitizadas autorizadas nesta rodada. Não publicar dados, código ou screenshots internos dessas aplicações. A evidência do gateway é metadados/configuração; não implica acesso livre a dados nem vector RAG. Nenhum projeto privado é aberto para produzir prova pública.
