# About

## API

- TypeScript
- NestJS
- TypeORM
- MySQL
- Docker
- Open API - Swagger

## Client

- TypeScript
- NextJS

# Getting started

Clone

```sh
git clone https://github.com/slecuona/dog-breed-app
```

## API

```sh
cd api
npm i
docker build .
```

Run containers

```sh
docker compose up
```

Go to

`http://localhost:8000/api/`

Execute POST request `/dogs/seeds`
(Repeat step for more dogs)


## Client

```sh
cd ../client/
npm i
```

Run

```sh
npm run dev
```

Go to

`http://localhost:3000/`


# TODO

- Client: Custom form fields validation before submitting.
- API: Dog breed entity.
- Infinite scroll: we can get a total of dogs to avoid the last request.
- API: MySQL database can be replaced with MongoDB (But TypeORM has a basic support)
- Tests

# Notes

- Some API endpoints has an intentional delay
