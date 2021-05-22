# TypeScript Next.js example, extended following Supabase example

I started with `npx create-next-app --example with-typescript your-app-name`

Then I stole the auth pattern using magic links from this [Supabase example](https://github.com/supabase/supabase/tree/master/examples/nextjs-ts-user-management).

Create a supabase project, run the "user management" SQL quickstart, and plug the API Key and URL into an `.env.local`, and you're up and running locally.

## Deploy via Vercel

`vercel`
note - use the './' default for "what is the root directory"... this is not asking for the build dir

## How to use it?

`yarn dev`

A `type-check` script is also added to `package.json`, which runs TypeScript's `tsc` CLI in `noEmit` mode to run type-checking separately. You can then include this, for example, in your `test` scripts.
