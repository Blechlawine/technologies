# Full-stack

Next, Nuxt, etc. Meta-frameworks that can do almost anything and are a great starting point for proof-of-concepts or monolithic apps.

---

## Astro

[Website (https://astro.build/)](https://astro.build/)

| Pros                                               | Cons                                              |
| -------------------------------------------------- | ------------------------------------------------- |
| Frontend-framework-agnostic                        | Not as All-in-one as other solutions on this list |
| Minimises amount of Javascript the client receives |                                                   |
| Blazingly fast (if you use SSG, idk about SSR)     |                                                   |
| SSG and SSR support with partial hydration/Islands |                                                   |
| Great Typescript support                           |                                                   |

---

## Nuxt (3)

[Website (https://nuxt.com/)](https://nuxt.com/)

| Pros                                                                                    | Cons                             |
| --------------------------------------------------------------------------------------- | -------------------------------- |
| Vue                                                                                     | A lot of code-gen under the hood |
| Can pretty much disappear out of your codebase                                          |                                  |
| Compiles to a normal node server                                                        |                                  |
| Good Typescript support                                                                 |                                  |
| Uses Nitropack as the server                                                            |                                  |
| SSR, SSG, Hybrid-rendering supported                                                    |                                  |
| File-based routing                                                                      |                                  |
| Vite                                                                                    |                                  |
| Response types flow through the API with `useFetch`, similar to tRPC, but with code-gen |                                  |

---

## Sveltekit

[Website (https://kit.svelte.dev/)](https://kit.svelte.dev/)

| Pros                              | Cons                                 |
| --------------------------------- | ------------------------------------ |
| Svelte                            | Svelte syntax can be weird sometimes |
| Vite                              |                                      |
| Svelte syntax is sometimes genius |                                      |

---

## Solid-start

[Website (https://start.solidjs.com/)](https://start.solidjs.com/)

I haven't used this one myself, but it looks very promising.

| Pros                                                                 | Cons |
| -------------------------------------------------------------------- | ---- |
| A set of primitives, like solid                                      | JSX  |
| SolidJS                                                              |      |
| Vite                                                                 |      |
| SolidStart can be used to create CSR, SSR, streaming SSR or SSG apps |      |
| Multiple deployment adapters to deploy on your favourite platform    |      |

---

## Fresh

[Website (https://fresh.deno.dev/)](https://fresh.deno.dev/)

Island full-stack framework with Deno and Preact.

---

## Next js

[Website (https://nextjs.org/)](https://nextjs.org/)

[t3-stack (https://create.t3.gg/)](https://create.t3.gg/)

Next js is a great starting point for full-stack React apps. Especially with the t3 stack (typescript, tRPC, prisma, React)

| Pros                                                             | Cons    |
| ---------------------------------------------------------------- | ------- |
| React, because it's popular                                      | React   |
| The T3 stack is great                                            | JSX     |
| There is a version based on Turbopack, but that's still in alpha | No vite |
