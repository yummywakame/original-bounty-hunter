# Client — React + Vite

This is the frontend for The Original Bounty Hunter, built with React 17 and Vite.

## Development

From the repo root, start the Express backend first:

```bash
npm start
```

Then start the Vite dev server:

```bash
cd client
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The dev server proxies `/bounty` API requests to the backend at `http://localhost:7000`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server at [localhost:3000](http://localhost:3000) |
| `npm start` | Alias for `npm run dev` |
| `npm run build` | Production build — output to `client/build/` |
| `npm run preview` | Preview the production build locally |

## Tech Stack

- [React 17](https://reactjs.org/)
- [Material UI v4](https://v4.mui.com/)
- [Vite 7](https://vitejs.dev/)
- [Axios](https://axios-http.com/)
