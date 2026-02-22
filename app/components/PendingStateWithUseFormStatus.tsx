/* Pending State with useForm status:- useFormStatus is a React hook that gives us status information about the last
form submission. when we call it it returns status object with 4 key properties

const status = useFormStatus();
1. pending -  a boolean that indicates if the parent <form> is currently submitting
2. data - an object containing the form's submission data.
3. method -  a string(either 'get' or 'post') showing the HTTP method being used
4. action -  a reference to the function that was passed to the parent <form>'s action prop.

we will use pending property to disable our submit button while the form is being processed.
-> see product-db-create-new folder page.tsx file
-> we could use useFormStatus hook directly in page.tsx file but hooks can be used in client components, converting our entire 
page to client component would not be idle because we will lose all the advantages of server components.
-> so we will extract just submit button jsx into its own client component. this way we can use hook without compromising 
the benifits of RSC. so create submit.tsx in components folder and define submit component. and use that component in page.tsx file,.
-> test it using /product-db-create-new 

-> with Next.js server actions we can use the useFormStatus hook from react-dom to manage state related to active form submission
by extracting just the sbumit button into a client component.
*/