# Communication layer

These are for specific/easier communication between the frontend and backend. Some of these require you to write your backend code in their own way.

---

## tRPC

[Website (https://trpc.io/)](https://trpc.io/)

Great for when the entire codebase is under your control.

| Pros                                                                                  | Cons                                               |
| ------------------------------------------------------------------------------------- | -------------------------------------------------- |
| Full-stack type-safety, if your backend and frontend are written in typescript        | Monorepo is a requirement for the type-safety      |
| Framework and platform-agnostic, so you're flexible to choose your other technologies | Only easily consumable with the tRPC-client        |
| Have to use typescript                                                                | Have to use typescript on the frontend and backend |
| No code-gen for type-safety                                                           | Not easy to retrofit into old code                 |
| Communication works over normal http/https                                            |                                                    |
| Built-in realtime API support                                                         |                                                    |

## GraphQL

[Website (https://graphql.org/)](https://graphql.org/)

Query language for your API. Great for when you don't know which specific data the client is going to want from your API.

| Pros                                                                    | Cons                                                                                        |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Language-agnostic (not bound to any programming language)               | Type-safety only through code-gen                                                           |
| You can get type-safety on your frontend, but with code-gen             | Kind of requires you to use a library to produce and consume the API, if you want decent DX |
| There are many different libraries to consume and produce a graphql API |                                                                                             |
| Automatically generated API-"documentation"                             |                                                                                             |

## REST

The good ol' REST.

| Pros                                                          | Cons                                                  |
| ------------------------------------------------------------- | ----------------------------------------------------- |
| supported by pretty much every technology                     | No type-safety, except with some libraries/frameworks |
| pretty much everyone knows what it is and how to work with it | You need to write your own API documentation          |
| Fast and easy to setup                                        |                                                       |
