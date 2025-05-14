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
### auth

| Method | Url | Fields | Response
| --- | --- | --- | --- |
| - | - | - | -

### ticket
| Method | Url | Fields | Response
| --- | --- | --- | --- |
| POST | /api/ticket/create/nmas | `reference_id: string` `title: string` | `message: string` `ticket_id: string`
| POST | /api/ticket/create/budget | `reference_id: string` `title: string` | `message: string` `ticket_id: string`
| POST | /api/ticket/status | `reference_id: string` | `message: string` `ticket.status: string` `ticket.remarks: string`
| DELETE | /api/ticket/delete | `reference_id: string` | `message: string`
