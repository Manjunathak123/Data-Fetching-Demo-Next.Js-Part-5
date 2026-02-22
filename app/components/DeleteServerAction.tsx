/* Delete Server Action:- In this we are going to implement delete functionality using server actions.
we will start by adding delete button for each product. in product-db-delete/page.tsx 
-> define delete server action in actions/products.ts create removeProduct method in server actions.
after that we need to call this deleteaction but we should not call onclick because it is a client side code, but we 
want the component as server side the solution is to wrap our button with form element, we will we pass product
 id using bind method.


*/