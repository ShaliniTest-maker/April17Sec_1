# April17Sec_1

A minimal Node.js tutorial HTTP server built with the [Express.js](https://expressjs.com/) web framework. It exposes two `GET` endpoints: one that returns `Hello world` and one that returns `Good evening`.

## Prerequisites

- [Node.js](https://nodejs.org/) **18 or higher** (Express 5 requires Node.js 18 or higher).
- **npm** (bundled with Node.js).

## Installation

Install the project dependencies:

```bash
npm install
```

This installs [`express`](https://www.npmjs.com/package/express) (declared in `package.json`) into `node_modules/` and creates/uses `package-lock.json` for reproducible installs.

## Running the server

Start the server:

```bash
npm start
```

This runs the `start` script defined in `package.json` (`node server.js`). By default the server listens on port **3000**, so it is reachable at `http://localhost:3000`. The port is configurable through the `PORT` environment variable (`server.js` uses `process.env.PORT || 3000`).

Once the server is listening, it logs:

```text
Server listening on port 3000
```

## Endpoints

| Method | Path | Response |
| ------ | --------------- | -------------- |
| `GET`  | `/`             | `Hello world`  |
| `GET`  | `/good-evening` | `Good evening` |

### Example usage

With the server running, query each endpoint with `curl`:

```bash
curl http://localhost:3000/
# -> Hello world

curl http://localhost:3000/good-evening
# -> Good evening
```
