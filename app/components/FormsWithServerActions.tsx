/* Forms with server actions:- 

Server Actions:- Server actions are asynchronous functions that are executed on the server.
-> they can be called in server and client components to handle form submissions and data mutations in 
Next.js applications.
-> you should use server actions when you
1. need to perform secure database operations
2. want to reduce API  boilerplate code
3. need progressive enhancements for forms
4. want to optimize for performance

-> A server action can be defined with the React "use server" directive. you could place the directive
1. at the top of async function to mark the function as a Server Action, or
2. at the top of seperate file to mark all exports of that file as Server Actions.

-> create product-db-create folder inside it create page.tsx file. this is a server component.
-> test it using /product-db-create

Server Actions Benefits:-
1. Simplified Code:- They dramatically simplify your code as there is no need for seperate API routes or client-side 
management for form data.
2. Improved Security:- They boost security by keeping sensitive operations server-side, away from potential threats.
3. Better Performance:- They improve performance because there's less javascript running on the client, leading to faste
load times and better core web vitals.
4. Progress  enhancement:-forms keep working even if javascript is turned off in the browser- making your apps more 
accessible and resilient.

*/