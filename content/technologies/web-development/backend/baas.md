# BaaS

All of these solutions have built-in auth and a relatively simple to use but powerful UI to create and manage your Data.

---

## Directus

| Pros                                                   | Cons                                                                      |
| ------------------------------------------------------ | ------------------------------------------------------------------------- |
| Javascript SDK                                         | No realtime API (yet)                                                     |
| Some Typescript support                                | Schema only configurable through UI                                       |
| Easy to setup hosting                                  | You can generate a YAML file to copy onnly the schema to another instance |
| Open-source                                            | Using the SDK with TypeScript is not great                                |
| Can plug into an existing database                     |                                                                           |
| Supports most SQL databases                            |                                                                           |
| A lot of features                                      |                                                                           |
| Fine-grained access-control                            |                                                                           |
| File-management with image converters (resizing, etc.) |                                                                           |
| Extendible everywhere with your own plugins            |                                                                           |

---

## Payload CMS

[Website (https://payloadcms.com)](https://payloadcms.com)

similar to directus, but you specify the schema in code and get generated types, a REST and GraphQL API, and much more.

| Pros                                               | Cons |
| -------------------------------------------------- | ---- |
| Schema defined in code                             |      |
| Generated types even without using the GraphQL API |      |
| Built-in admin UI                                  |      |
| Permission management                              |      |
| Seems very powerful                                |      |

---

## Keystone

[Website (https://keystonejs.com/)](https://keystonejs.com/)

Similar to directus, except you specify the schema in a typescript file and only get a graphql API.

| Pros                                            | Cons                                             |
| ----------------------------------------------- | ------------------------------------------------ |
| Schema defined programmatically                 | Relatively simple Admin UI, compared to Directus |
| GraphQL API enables type safety through codegen |                                                  |
| Built-in simple Admin UI                        |                                                  |

---

## Pocketbase

<!-- TODO: add Pocketbase website -->

| Pros                    | Cons                    |
| ----------------------- | ----------------------- |
| Realtime API            | SQLite as only database |
| Javascript SDK          |                         |
| A single executable     |                         |
| Simple to setup hosting |                         |

---

## Supabase

<!-- TODO: add Supabase website -->

| Pros                                     | Cons                         |
| ---------------------------------------- | ---------------------------- |
| Almost as powerful as Firebase           | Complicated to setup hosting |
| Built with open source technologies      |                              |
| Postgres database for persistent storage |                              |
| Row-level security/access-control        |                              |
