# Hands on NextJs 14+

NextJs technology is builded on top of ReactJs, it is a complete framework with all the necessary tools to build a fully fled application.

## Technologies

- NextJs 14.2.8
- React 18
- Tailwind 3.4+
- Typescript 5+
- fast-sort 3.4+
- zod 3.23+
- Prisma 5.18+
- Next [Documentation](https://nextjs.org/docs/pages/api-reference/components/font)
- MySQL
- Cloudinary
- NextAuth 4.24+ (next-auth, providers, middleware, @next-auth/prisma-adapter)
- bcrypt
- react-mail, @react-email/components
- Resend

## Topics

- Basic building blocks (file structure, page, layout, loadin, error, etc.)
- Routes (simple and complex)
- Navigation
- Building API
- Upload file to cloud (Cloudinary)
- Authentication
- Send Email

## API

Inside the file we can had either a `page.tsx` for UI or `route.tsx` for handling HTTP requests. But NOT BOTH. Inside `route.tsx` file, methods should be named as HTTP verbs ie. GET, POST, PUT, PATCH, etc.

```Ts
export function GET(request: NextRequest) {
    // some business logic
    return NextResponse.json(
        {
        // here the response object
        },
        {
            status: 200
        }
    )
}
```

### Routing

`ROUTING IS BASED ON THE FILE SYSTEM/STRUCTURE` that's why
Routing is based on convention, not configuration. For instance for `/users` path, create a folder under `App` named `users`. Inside users folder create

#### `params` keyword

It's used to access path variables or parameters.

- Path `users/id` ie users/1... or `users/3/cart/1`

Under `users` folder, create another folder named `[id]` and create `page.tsx` in order to access it. THIS ONLY WORK AT THE PAGE LEVEL. This process can be repeated for complex path like `users/1/cart/3` but this time `[id]` can't be used again for `cart`. Inside `cart` it is possible to access user `id` parameter.

```Ts
interface Props {
    params: { id: number} // Here 'id' should be the same name as set for the folder ie [id] (with square brackets) previously
}
// Pass this props to the functional component
```

- Path `users/cart/product/shoes`

`[...slug]` make extra path parts mendatory ie `/cart/...` part

`[[...slug]]` make extra path parts optional ie no need `/cart/product/...` part in order to work.

Here we are not going to create an heavy nested file structure. Instead we proceed like this. We create a folder named `[...slug]` then a file `page.tsx`, inside this file:

```Ts
interface Props {
    params: { slug: string[] } // The parameter is an array of strings, representing the complex path "users/cart/product/shoes" for instance
}
// Passed as component properties
```

#### `searchParams` keyword

It's used to access parameters like (brand) ie `cars?brand=mercedes`

```Ts
interface Props {
    searchParams: { brand: string }
}
// Pass the property to the component
```

#### Special Files in NextJs 14

- `page.tsx` file. Without this file this path/folder is not publicly accessible.
- `layout.tsx` file, for defining a common layout for our page.
- `loading.tsx` file, to show loading element when navigate on this route.
- `not-found.tsx` file, to show 404 path, custom error.
- `route.tsx` file, for creating APIs.
- `global-error.tsx` file, to catch errors even at the layout level.
- `error.tsx` file, for general errors - and should be rendered on client side (meaning usage of "use client" directive). `THIS COMPONENT WILL AUTOMATICALLY GET AN 'ERROR' OBJECT AS PROPS`.

Nested routes follow the same principle for routing.

### Directive

- `"use client"` is use on the first line (on top) of the component to mention that the component will need client interaction like click event.

### Navigation

Navigation is made using `<Link href="/path">Anchor</Ling>` for client side navigation.

#### Programmatic navigation

Programmatic navigation is made using `useRouter` hook from `next/navigation` package

## DIRECTIVES

ANY COMPONENT USING A REACT HOOK WHICH INTERNALLY USE `useContext` HOOK MUST HAVE `use client` DIRECTIVE.

```Ts
"use client";
import { useRouter } from "next/navigation";

const MyComponent = () => {
    const router = useRouter()

    return <>
        <button onClick={()=>router.push("/path-to-go")}>Navigate Somewhere</button>
    </button>
}
```

#### Programmatically show not found page

It is made using `notFound()` function from `next/navigation`.

```Ts
import { notFound } from "next/navigation";

const MyComponent = () => {
    // some code
    if(Condition) notFound();
    // other code
}
```

### Page Rendering

![Rendering screenshot](./screenshots/sht01.png)

### Advanced Routing & Navigation

### Prisma integration

ALL Prisma CALLS ARE ASYNCHRONOUS

- `npx prisma init` to initiate the project with prisma
- Migrate with `npx prisma migrate dev`

The [documentation](https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices) is there to help.

To define models and relationship see the [Model documentation](https://www.prisma.io/docs/orm/prisma-schema/data-model/models)

After any model changed, we should run a migration.

- `npx prisma migrate dev` to run the migration in order to keep the database in sync with the models (For Relational databases).
- `npx prisma push` to run migration on None Relational databases like MongoDB for instance.

### Authentication with NextAuth

Use this [NextAuth documentation Providers](https://next-auth.js.org/providers/) for configuring different providers

This link to [configure Oauth with Google provider](https://next-auth.js.org/providers/google)

#### Inner routes

THESE ARE THE ENDPOINTS HANDLE BY NextAuth

- `/api/auth/signin` defined and builded by NextAuth for SignIn.

- `/api/auth/signiout` defined and builded by NextAuth for logout.

### Protect Routes

The file holding this configuration should be at the root of the project file structure and named as `middleware.ts`.
Take a look on the documentation [Documentation](https://next-auth.js.org/configuration/nextjs#middleware)
```Ts
export {default} from 'next-auth/middleware';

export const config = {
    // * -> for zero or more characters, Then /users/:id* match "/users";  "/users/[1-100..."; "/users/3/any"; etc
    // + -> for one or more characters,  Then /users/:id+ at least one id
    // ? -> for zero or one character,  Then /users/:id? match "/users" or "/users/anyId"
    matcher: ["/dashboard/:path*"] // THis the protected route
}
```
By using next-auth middleware with defined named convention [Here the documentation](https://authjs.dev/getting-started/adapters/prisma?_gl=1*n3yohy*_gcl_au*NTM5MzY1Nzk3LjE3MjQxNTQ3ODkuMTc3OTg1NzE4Mi4xNzI0MzU2MjQ2LjE3MjQzNTYyNDU.) with Prisma Adapter, all user details are store into tables.

### Send Email

Send emails with react-email and [Resend](https://resend.com/docs/send-with-nextjs).