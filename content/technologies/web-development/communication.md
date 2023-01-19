# Communication layer

These are for specific/easier communication between the frontend and backend. Some of these require you to write your backend code in their own way.

---

## tRPC

[Website](https://trpc.io/)

Great for when the entire codebase is under your control.

### Pros

-   Full-stack type-safety, if your backend and frontend are written in typescript
-   Framework and platform-agnostic, so you're flexible to choose your other technologies
-   Have to use typescript
-   No code-gen for type-safety
-   Communication works over normal http/https
-   In-built realtime API support

### Cons

-   Monorepo is a requirement for the type-safety, which might not be suitable for some code-bases
-   Only easily consumable with the tRPC-client
-   Have to use typescript
-   Not easy to retrofit into old code

---

## GraphQL

[Website](https://graphql.org/)

Query language for your API. Great for when you don't know which specific data the client is going to want from your API.

### Pros

-   Language-agnostic (not bound to any programming language)
-   You can get type-safety on your frontend, but with code-gen
-   There are many different libraries to consume and produce a graphql API
-   Automatically generated API-"documentation"

### Cons

-   Type-safety only through code-gen
-   Kind of requires you to use a library to produce and consume the API, if you want decent DX

---

## REST

The good ol' REST.

### Pros

-   supported by pretty much every technology
-   pretty much everyone knows what it is and how to work with it
-   Fast and easy to setup

### Cons

-   No type-safety, except with some libraries/frameworks
-   You need to write your own API documentation
