/* Form Validation with useActionState:- managing error states in our form.
-> useActionState is a React hook that allows us to update state based on the result of a form action
-> It is particularly helpful for handling form validation and error messages.

useActionState takes two parameters first is serverAction which is createProduct and second id initial form state.
  -> this hook returns current form state, new form action and boolean that action currenlty being executed.lets use 3 values 
  in our component. we will use state to display error messages. so below to each lable we will display the error message 
  -> we will pass formAction to form
  -> we will use pedning to conditionally disable the submit button when the action is being submitted but this is completly optional 
  but we can do that.
  -> if you run this file we will get error because we are using useActionState in a server component. so we can't use use server 
  directive in a component marked with use client directive.
  
  Seperating Server Actions:-
  -> the solution for the above is seperate our server action into its own file keeping our server side logic cleanly seperated 
  from client side component.
  -> to do this create new folder actions and create a folder products.ts 

  -> test this using /product-db-create-error-messages.

  

*/