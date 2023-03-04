# ORMs

---

## Prisma

[Website (https://www.prisma.io/)](https://www.prisma.io/)

### Pros

-   Great types
-   works great with tRPC
-   Simple but powerful schema language

### Cons

-   Entire schema in one file
-   Schema is written in its own language

---

## OrchidORM

[Website (https://orchid-orm.netlify.app)](https://orchid-orm.netlify.app)

Another typesafe ORM, like a mix between prisma and typeorm

---

## TypeORM

[Website (https://typeorm.io/)](https://typeorm.io/)

### Pros

-   Schema is split into classes
-   easily extendable, even if you don't have access to change the entire schema
-   great typescript support

### Cons

-   Types from the schema have a bunch of functions on them, which makes them incompatible with sending types to the client

---

## Sequelize

[Website (https://sequelize.org/)](https://sequelize.org/)

### Pros

-   great for simple setups without typescript

### Cons

-   terrible typescript support
