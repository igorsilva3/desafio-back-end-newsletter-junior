<h1 align="center">Tech challenge Newsletter</h3>

---

<p align="center">A backend application, dockerized, whose objective is to register and filters answers.
    <br> 
</p>

## 📝 Table of Contents

- [Getting Started](#getting_started)
  - [Prerequisites](#prerequisites)
  - [Installing](#installing)
- [Usage](#usage)
- [Deployment](#deployment)
- [Author](#author)

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

These programs installed on your machine:
  - [NodeJS v18.14.0](https://nodejs.org/en/download/)
  - [Postgresql](https://www.postgresql.org/download/)
  - [Yarn](https://classic.yarnpkg.com/en/docs/install)
  - [Docker](https://www.docker.com/)
  
#### Environments file configuration

Create the environment files for production and development

```bash
touch .env .env.development
```

Then configure your environment variables by editing each file

_Editing .env file_

```env
POSTGRES_USER="Your postgres user"
POSTGRES_PASSWORD="Your postgres password"
POSTGRES_DB="Your postgres database"

DATABASE_URL="postgres://${YOUR_POSTGRES_USER}:${YOUR_POSTGRES_PASSWORD}@postgres:5432/${YOUR_POSTGRES_DB}?schema=public"

SERVER_HOST="Your server host" (optional)
SERVER_PORT="Your server port" (optional)
```
---
_Editing .env.development file_

```env
DATABASE_URL="postgres://${YOUR_POSTGRES_USER}:${YOUR_POSTGRES_PASSWORD}@localhost:5432/${YOUR_POSTGRES_DB}?schema=public"

SERVER_HOST="Your server host" (optional)
SERVER_PORT="Your server port" (optional)
```
---

For more information about URL connection, visit: [Prisma - Connect your database](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/connect-your-database-typescript-postgres)

### Installing

A step by step series of examples that tell you how to get a development env running.

Installing the dependencies

```bash
yarn install
```

End with an example of getting some data out of the system or using it for a little demo.

## 🎈 Usage <a name="usage"></a>

Execute the command

```bash
yarn dev
```

Access the application: http://localhost:3000/ OR http://localhost:{YOUR_SERVER_PORT}/

## 🚀 Deployment <a name = "deployment"></a>

Let's use docker compose for application deployment

Execute the command

```bash
docker-compose up
```

Access the application: http://localhost:3000/

## ⛏️ Built Using <a name = "built_using"></a>

- [PostgreSQL](https://www.postgresql.org/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [Typescript](https://www.typescriptlang.org/) - Programming language
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Prisma](https://www.prisma.io/) - Object Relational Mapping (ORM)
- [Swagger](https://swagger.io/) - API DOCS Framework

## ✍️ Author <a name = "author"></a>

- [@igorsilva3](https://github.com/igorsilva3) - Igor Silva

