<!--
DGX FILE HEADER
nivel: L2-small
arquivo: docs/content-contract.md
papel: Fonte de verdade para fatos públicos do portfólio pessoal.
modo: contrato de conteúdo
validar: revisão manual do Dyllan
-->
<!-- DGX:ANCHOR: personal-portfolio-content-contract -->

# Contrato de conteúdo factual

Este arquivo impede que a interface transforme estrutura de página em currículo inventado. O
conteúdo público só pode avançar quando o Dyllan fornecer ou aprovar cada item.

## Fatos usados nesta base

| Item | Estado | Fonte | Uso atual |
|---|---|---|---|
| Nome: Dyllan Alves Cordeiro | CONFIRMADO | Currículo-base fornecido em 20/08/2026 | Cabeçalho, Hero e rota `/curriculo` |
| Tema e posicionamento de trabalho | CONFIRMADO | Envelope GK + currículo-base + revisão 20/08/2026 | Cibersegurança no centro; arquitetura de sistemas, dados e software como apoio |
| Contatos públicos | CONFIRMADO | Currículo-base fornecido em 20/08/2026 | E-mail, telefone e LinkedIn; endereço completo não foi exposto |
| Formação e idiomas | CONFIRMADO | Currículo-base fornecido em 20/08/2026 | UNIDESC, Sistemas de Informação, inglês e espanhol |
| Histórico de redes e suporte | CONFIRMADO | Currículo-base fornecido em 20/08/2026 | AGE Telecom, Stefanini Group, NWI Telecom e SKILL.NET |
| Digytron BR em nível técnico | CONFIRMADO | Documentação local da Digytron + solicitação explícita desta atualização | Contexto atual de engenharia aplicada; sem clientes, Space ou dados internos |
| Foto de Dyllan | CONFIRMADO | Arquivo real fornecido em 20/08/2026 | `/public/assets/dyllan-alves-cordeiro.jpeg` e composição central do Hero |
| Repositório do site | CONFIRMADO | Criado nesta sessão em 20/08/2026 | https://github.com/dyllan-alves-cordeiro/dyllan-cybersecurity-portfolio — nunca Digytron System |

## Itens pendentes antes de conteúdo público

- Cargo ou posicionamento preferido.
- Datas finais atualizadas de experiências cujo currículo-base não as informa.
- Certificados formais, instituições emissoras e datas.
- GitHub de outros projetos pessoais, se existirem além deste repositório do site.
- Aprovação do resumo profissional e da descrição pública da Digytron.
- Três a cinco experiências/projetos com autorização de citação.
- Para cada case: contexto, responsabilidade, abordagem, tecnologia e resultado comprovável.
- Domínio desejado.
- Idioma inicial: PT-BR default, com apresentação em inglês disponível no switch global.
- Aprovação final da foto em produção e da versão visual.

## Superfície `/ai-engineering`

A rota de AI Engineering é uma superfície pública profissional bilíngue, com português como estado inicial. Ela pode afirmar apenas o
posicionamento congelado de fundador/full-stack engineer, experiência prática com integração server-side de
modelos, workflows com tools, padrões de RAG, continuidade de sessão e o método Coordinator–Executor dentro de
uma matriz de harness/modelo suportada.

O switch de idioma é global e persistido entre as rotas públicas. A tradução deve preservar o mesmo limite factual
em PT-BR e em inglês; mudar o idioma não autoriza adicionar métricas, escala enterprise, clientes, certificações ou
resultados que não estejam provados na fonte editorial.

Ela deve separar explicitamente quatro estados de evidência:

- `BUILT / PRIVATE EVIDENCE`: implementação real que não pode expor repositórios, segredos, clientes ou dados internos;
- `PUBLIC SURFACE / IN PROGRESS`: documentação pública do método e dos limites;
- `PUBLIC EVALUATION / NOT YET MEASURED`: datasets, graders, regressão, qualidade, latência, custo e segurança ainda não publicados;
- `ENTERPRISE OUTCOMES / NOT PUBLICLY PROVEN`: adoção, escala e resultados mensuráveis não devem ser inferidos da implementação privada.

Não publicar nessa rota: `INCB` sem definição e prova auditável, cobertura irrestrita de qualquer harness/modelo,
proficiência em espanhol, métricas de produção não divulgadas, escala enterprise, nomes de clientes ou a promessa de
que uma implementação privada equivale a uma avaliação pública.

## Conteúdo omitido da versão pública

- Endereço completo, data de nascimento, estado civil e informação sobre filhos.
- Experiência administrativa e estágio antigo, por não serem centrais ao posicionamento atual.
- Disponibilidade genérica para viagens ou mudança de região.
- Números, clientes, certificações formais ou resultados sem fonte validada.

## Fontes explicitamente excluídas

- Digytron Space.
- Repositórios de clientes.
- Dados jurídicos e de identidade comercial da Digytron.
- Currículos, bios ou links encontrados em superfícies operacionais sem aprovação específica.
- Conteúdo do Digytron Space e dados de clientes.
