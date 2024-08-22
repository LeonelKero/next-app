import middleware from 'next-auth/middleware';

// export function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL("/new-page", request.url))
// }

export default middleware;

export const config = {
    // * -> for zero or more characters, Then /users/:id* match "/users";  "/users/[1-100..."; "/users/3/any"; etc
    // + -> for one or more characters,  Then /users/:id+ at least one id
    // ? -> for zero or one character,  Then /users/:id? match "/users" or "/users/anyId"
    matchers: ["/dashboard/:id*"] // THis the protected routes
}