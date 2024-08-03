# Hands on NextJs 14+

NextJs technology is build on top of ReactJs, it is a complete framework with all the necessary tools to build a fully fled application.

## Topics

### Routing

Routing is based on convention, not configuration. For instance for `/users` path, create a folder under `App` named `users`. Inside users folder create

- `page.tsx` file. Without this file this path/folder is not publicly accessible.
- `layout` file

Nested routes follow the same principle for routing.

### Navigation

Navigation is made using `<Link href="/path">Anchor</Ling>` for client side navigation.

### Page Rendering

![Rendering screenshot](./screenshots/sht01.png)
