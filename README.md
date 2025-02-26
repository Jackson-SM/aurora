# Sobre **Aurora**

Esse projeto é uma aplicação em monorepo utilizando [TurboRepo](https://turbo.build/). A ideia principal é criar uma aplicação que possa ser utilizada como um consolidador de carteiras de investimentos. A aplicação é dividida em duas partes, uma aplicação web e uma aplicação server para gerir informações sensíveis e realizar a comunicação com a aplicação web promovendo uma maior segurança.

## Tecnologias Utilizadas
### Backend:
- [Fastify](https://fastify.io/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [JWT](https://jwt.io/)
- [Argon2](https://www.npmjs.com/package/argon2)
- [Eslint](https://eslint.org/)+[Prettier](https://prettier.io/)
- [Awilix](https://www.npmjs.com/package/awilix)
- [Zod](https://zod.dev/)
### Frontend:
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Shadcn](https://ui.shadcn.com/)
- [React Hook Form](https://react-hook-form.com/)
- [React Query](https://react-query.tanstack.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Utilizando a aplicação

Inicie os seguintes comandos

```sh
git clone https://github.com/Jackson-SM/aurora
cd aurora
# Instale as dependências
yarn
```

### Configuração
- Crie um arquivo .env na raiz da aplicação após utilizar o `git clone` e adicione as variaveis de ambiente necessárias contidas no arquivo `.env.example`.
- Para iniciar o banco de dados, foi utilizado o Docker.
```sh
cd aurora
docker-compose up -d
```

Dessa forma, ele irá criar um container com o banco de dados PostgreSQL. Você pode substituir as informações do `.env` para se adequar ao seu ambiente. Como o usuário e a senha do banco de dados PostgreSQL.

### Build

Para iniciar o processo de build, execute os seguintes comandos:

Caso não possua yarn:
``
npm install -g yarn
``

```
cd aurora
yarn build
```

### Desenvolvimento

Para iniciar o processo de desenvolvimento, execute os seguintes comandos:

```
cd aurora
yarn dev
```


## Arquivos da Aplicação

### Apps and Packages

- `@aurora/server`: `server` é uma aplicação [Fastify](https://fastify.dev/)
- `@aurora/web`: `web` é uma aplicação [Next.js](https://nextjs.org/)

Cada `package/app` é 100% [TypeScript](https://www.typescriptlang.org/).