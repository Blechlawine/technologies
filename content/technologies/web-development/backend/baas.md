# BaaS

All of these solutions have built-in auth and a relatively simple to use but powerful UI to create and manage your Data.

---

## Directus

### Pros

-   Javascript SDK
-   Some Typescript support
-   Easy to setup hosting
-   Open-source
-   Can plug into an existing database
-   Supports most SQL databases
-   A lot of features (Translations, All the relations, web-hooks and other "flows", etc.)
-   Fine-grained access-control
-   File-management with image converters (resizing, etc.)
-   Extendible everywhere with your own plugins

### Cons

-   No realtime API (yet)
-   Schema only configurable through UI
-   You can generate a yml file to copy the schema to another instance, but that copies only the schema
-   Using the SDK with typescript is a nightmare

---

## Payload CMS

[Website](https://payloadcms.com)

similar to directus, but you specify the schema in code and get generated types, a REST and GraphQL API, and much more.

### Pros

-   schema defined in code
-   generated types even without using the graphql API
-   Built-in admin ui
-   Permission management
-   Seems very powerful

---

## Keystone

[Website](https://keystonejs.com/)

Similar to directus, except you specify the schema in a typescript file and only get a graphql API.

### Pros

-   Schema defined programmatically
-   GraphQL API enables typesafety through codegen
-   Built-in simple Admin UI

### Cons

-   Relatively simple Admin UI, compared to directus

---

## Pocketbase

### Pros

-   realtime API
-   javascript SDK
-   is a single executable
-   Really simple to setup hosting

### Cons

-   SQLite as only database

---

## Supabase

### Pros

-   almost as powerful as firebase
-   Built with open source technologies
-   Postgres database for persistent storage
-   Row-level security/access-control

### Cons

-   complicated to setup hosting
