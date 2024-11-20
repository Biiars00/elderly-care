# Care Idosos - Backend

O **Care Idosos** é uma aplicação backend desenvolvida em **Node.js** e **TypeScript**, com integração ao banco de dados **Firebase**. O objetivo principal do projeto é oferecer um conjunto de serviços essenciais aos idosos, disponíveis 24 horas por dia. Os serviços incluem **consultas médicas**, **exames de saúde**, **contatos de emergência** e **suporte técnico** especializado. A plataforma visa melhorar a qualidade de vida dos idosos, garantindo que eles tenham acesso rápido e fácil a cuidados de saúde e apoio sempre que necessário.

## Índice

- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Requisitos](#requisitos)
- [Instalação e Configuração](#instalação-e-configuração)
- [Estrutura de Diretórios](#estrutura-de-diretórios)
- [Como Usar](#como-usar)
- [Endpoints da API](#endpoints-da-api)
- [Licença](#licença)

## Visão Geral

O **Care Idosos** fornece uma API RESTful para gerenciar os serviços voltados aos idosos. A aplicação permite:

- **Agendar consultas médicas** com profissionais de saúde.
- **Solicitar exames** e visualizar resultados.
- **Acessar contatos de emergência** com instituições de saúde e familiares.
- **Obter suporte técnico** especializado para dispositivos e tecnologias usadas pelos idosos.

## Tecnologias Utilizadas

- **Node.js** – Ambiente de execução para JavaScript no lado do servidor.
- **TypeScript** – Superset de JavaScript que adiciona tipagem estática ao código.
- **Express.js** – Framework web para Node.js, usado para construir a API RESTful.
- **Firebase** – Banco de dados em tempo real.
- **Swagger** – Para documentação da API e testes interativos.

## Requisitos

Antes de começar, você precisará ter os seguintes softwares instalados:

- [Node.js](https://nodejs.org) (v18 ou superior)
- [npm](https://www.npmjs.com) (gerenciador de pacotes do Node.js)
- Credenciais de acesso para manipulação do banco de dados.

## Instalação e Configuração

1. **Clonar o Repositório**

   Clone este repositório para o seu ambiente local:

   ```bash
   git clone https://github.com/Biiars00/-elderly-care.git

   cd care-idosos-backend

   ```

2. Instalar Dependências

   Instale as dependências necessárias:

   ```bash
   npm install

   ```

3. Configurar Variáveis de Ambiente

- Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

  ```bash
  URL_FIREBASE_CREDENTIALS=firebase-api-key
  ```

4. Executar o Servidor:

   ```bash
   npm run dev
   ```

## Estrutura de Diretórios

    pti-mobile-server/
    ├── dist/
    ├── src/
    │   ├── controllers/
    │   ├── dependencies/
    │   ├── interfaces/
    │   ├── repositories/
    │   ├── routes/
    │   ├── services/
    │   ├── swagger/
    │   ├── app.ts
    │   └── server.ts
    ├── .env.example
    ├── package.json
    ├── tsconfig.json
    └── README.md

## Endpoints da API

| Método                     | Endpoint                            | Descrição                               |
| -------------------------- | ----------------------------------- | --------------------------------------- |
| **Contatos de emergência** |
| POST                       | /contacts                           | Registrar um novo contato de emergência |
| DELETE                     | /contacts/:contactId                | Remover um contato de emergência        |
| PUT                        | /contacts/:contactId                | Atualizar um contato existente          |
| GET                        | /contacts/:contactId                | Buscar um contato                       |
| GET                        | /contacts                           | Listar todos os contatos                |
| **Consultas e Exames**     |
| POST                       | /medicalServices                    | Agendar uma nova consulta/exame         |
| DELETE                     | /medicalServices/:serviceId         | Remover uma consulta/exame              |
| PUT                        | /medicalServices/:serviceId         | Atualizar uma consulta/exame            |
| GET                        | /medicalServices/service/:serviceId | Buscar uma consulta ou exame            |
| GET                        | /medicalServices/:service           | Listar todos as consultas/exames        |

## Imagens do Projeto

[Link do Protótipo](https://www.figma.com/proto/jukqH7LXwcVKvUYlm0RC6v/PTI-IV---SENAC-2024?node-id=3620-1908&node-type=canvas&t=IFHWgzAqsvWO7Ui7-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1)

## Licença

Este projeto está licenciado sob a [MIT License](./LICENSE.txt).
