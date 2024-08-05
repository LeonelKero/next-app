# Hands on NextJs 14+

NextJs technology is build on top of ReactJs, it is a complete framework with all the necessary tools to build a fully fled application.

## Technologies

- NextJs 14.2.8
- React 18
- Tailwind

## Topics

### Routing

`ROUTING IS BASED ON THE FILE SYSTEM` that's why
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

#### Special Files for routing

- `page.tsx` file. Without this file this path/folder is not publicly accessible.
- `layout.tsx` file, for defining a common layout for our page.
- `loading.tsx` file, to show loading element when navigate on this route.
- `not-found.tsx` file, to show 404 path, custom error.
- `route.tsx` file, for creating APIs.
- `error.tsx` file, for general errors.

Nested routes follow the same principle for routing.

### Directive

- `"use client"` is use on the first line (on top) of the component to mention that the component will need client interaction like click event.

### Navigation

Navigation is made using `<Link href="/path">Anchor</Ling>` for client side navigation.

### Page Rendering

![Rendering screenshot](./screenshots/sht01.png)

### Advanced Routing & Navigation
