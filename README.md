# TODO-tracker
[![Build Status](https://travis-ci.org/devcareer/Dae-Alright-Backend.svg?branch=develop)](https://travis-ci.org/devcareer/Dae-Alright-Backend)
[![Coverage Status](https://coveralls.io/repos/github/devcareer/Dae-Alright-Backend/badge.svg?branch=develop)](https://coveralls.io/github/devcareer/Dae-Alright-Backend?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/ca21463843302a0d5b8f/maintainability)](https://codeclimate.com/github/devcareer/Dae-Alright-Backend/maintainability)
[![Reviewed by Hound](https://img.shields.io/badge/Reviewed_by-Hound-8E64B0.svg)](https://houndci.com)


## Technologies Used

- [NodeJS](https://nodejs.org/en/download/)
- [ExpressJS](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/download/)


## Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:

- [NodeJS](https://nodejs.org/en/download/)
- [PostgreSQL](https://www.postgresql.org/download/)

### Installing/Run locally

- Make sure you have `nodejs`, `postgres` installed.

- Clone or fork repo🤷‍♂

  ```bash
    - git clone https://github.com/TundeMercy/TODO-tracker
    - cd TODO-tracker
    - npm install
  ```

- Create a PostgreSQL database by running the command below in `psql`

  ```bash
    createdb -h localhost -p 5432 -U postgres todo_dev
  ```

- Create/configure `.env` environment with your credentials. A sample `.env.example` file has been provided to get you started. Make a duplicate of `.env.example` and rename to `.env`, then configure your credentials.

- Run `npm run dev` to start the server and watch for changes.

### Testing

Test specs are implemented using [_mocha_](https://mochajs.org) & [_chai_](https://chiajs.com).

- To test or consume the API locally, you can make use of [_Postman_](https://www.getpostman.com) to simulate a front-end client.

> If you want to take the step below, first create a PostgreSQL database by running the command below in `psql`.

  ```bash
   createdb -h localhost -p 5432 -U postgres todo_test
  ```

- There is also a test script that you can fire up by running `npm test`. `npm test` performs a single full test suite run, including code coverage reporting.


## HTTP Requests

All API requests are made by sending a secure HTTPS request using one of the following methods, depending on the action being taken:

- `POST` Create a resource
- `GET` Get a resource or list of resources
- `PATCH` Update a resource
- `DELETE` Delete a resource

For `POST` and `PATCH` requests, the body of your request may include a JSON payload.

### HTTP Response Codes

Each response will be returned with one of the following HTTP status codes:

- `200` `OK` The request was successful
- `400` `Bad Request` There was a problem with the request (security, malformed)
- `401` `Unauthorized` The supplied API credentials are invalid
- `403` `Forbidden` The credentials provided do not have permissions to access the requested resource
- `404` `Not Found` An attempt was made to access a resource that does not exist in the API
- `500` `Server Error` An error on the server occurred
