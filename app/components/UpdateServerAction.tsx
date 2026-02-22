/* Update Server Action:- it is for update operation for a product.
under product-db-create-error-messages folder create new dynamic route [id]/page.tsx copy code from
product-db-create-error-messages/page.tsx 
-> if you route to /product-db-create-error-messages/1 it will display form to update but we need to populate the 
exisiting form fields. to get the exisiting product details corresponding to product 1 for that we will extract route parameter id 
and fetch the corresponding product from the database. and we will call getProduct by passing id. but we can't use await in 
client component means we can not use async. to solve this issue we will split a logic. in [id] create product-edit-form.tsx
in page.tsx we will focus only on datafetching part.so create product-edit-form.tsx file and copy code from page.tsx and paste here.
-> in the browser when we route to /products-db and when we click on product title it will will navigate to /product-db-create-error-messages/1
and it will display product details form.
-> our ui setup now complete. now we need to implement update server action for form submission.
-> In products.ts within the action folder dupliacte the create product action name it editproduct. see implementations.
and add the await updateProduct instead of addProduct. now we need to productId, since productId is not a form field so we cna't access
form fileds. for this we can use Javascript bind method to pass additional arguments.
-> In EditProductForm bind productId.

Summary of the update:-
-> we created dynamic route for updating individual route. we found client components can not be async components,
 for async issue we split data fetching into server component and form logic into a client component. from the server component we pass
 product deatils as a prop to the client component. in actions product.ts file we created new server action to handle product update.
 -> the data base function require product id whch is not availabe in form data, we use bind method to pass id as argument without 
 exposing in html. we retrive the id  as first argument and passed it to the database function. we got our product update functionality
 working as expected.

*/