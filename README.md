# express-auro
a backend boilerplate for the integration of api

## prerequisites
- node.js
- npm & pnpm

## features
- [ ] type-safe/typescript
- [ ] authentication support (drizzle + psql-supabase)

## getting started
### install dependencies
```bash
npm i # pnpm i
```

### build production
```bash
npm run build # pnpm run build
npm start # pnpm start
```

### development server
```bash
npm run dev # pnpm run dev
```

## api references
### ticket
| Method | Url | Fields | Description
| --- | --- | --- | --- |
| POST | /api/ticket/create/nmas | `reference_id`: string, `title`: string, `type` (1 meeting 2 attendance): string | edit this

