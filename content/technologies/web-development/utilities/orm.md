# ORMs

## Typescript

### Drizzle ORM

[Github](https://github.com/drizzle-team/drizzle-orm)

This seems to be a great alternative to prisma

| Pros                                                                   | Cons |
| ---------------------------------------------------------------------- | ---- |
| can generate migrations                                                |      |
| no code-gen                                                            |      |
| model definition syntax looks similar to zod validator syntax          |      |
| has a push command like prisma (currently only for mysql (March 2023)) |      |
| queries are made with a fully typesafe query builder                   |      |

---

### Prisma

[Website (https://www.prisma.io/)](https://www.prisma.io/)

| Pros                                | Cons                                                |
| ----------------------------------- | --------------------------------------------------- |
| Great types                         | Entire schema is in one file                        |
| Works great with tRPC               | Schema is written in its own language               |
| Simple but powerful schema language | Relies on code-gen to generate types for Typescript |

---

### OrchidORM

[Website (https://orchid-orm.netlify.app)](https://orchid-orm.netlify.app)

Another typesafe ORM, like a mix between prisma and typeorm

---

### TypeORM

[Website (https://typeorm.io/)](https://typeorm.io/)

| Pros                                                                          | Cons                                                                    |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Schema is split into classes                                                  | Types from the schema are difficult to work with for API type-inference |
| Easily extendable, event if you don't have access to change the entire schema |                                                                         |
| Great Typescript support                                                      |                                                                         |

---

### Sequelize

[Website (https://sequelize.org/)](https://sequelize.org/)

| Pros                                       | Cons                        |
| ------------------------------------------ | --------------------------- |
| Great for simple setups without Typescript | Terrible Typescript support |


<!-- ---

## Rust

TODO: prisma-client-rust

---

## Go

TODO: Gorm -->
