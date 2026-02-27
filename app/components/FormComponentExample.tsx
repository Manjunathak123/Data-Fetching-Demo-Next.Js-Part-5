/* Form Component:- The Form component is built on top of HTML form element comes with some powerful
features that make it perfect for modern web application:
1. It automatically fetching data
2. It handles client side navigation on form submission.
3. It provides progressive enhancement out of the box.
-> In our current application we have homw page and product-db-useOptimistic page to display list of product, in home
page we will add a product search feature that will redirect to the product-db page to show the list of products
filtered by the search query.
-> define loading component is loading.tsx file.
-> define search.tsx in components folder. in this file Form is a next.js form it will work as like normal html form.
-> then use this search.tsx file in root page.tsx file
-> Now based on search query we need to write data fecthing logic so modify getProducts method in prisma-db.ts
Important notes:-
1. When the Form component becomes visible, it prefetches the loading UI associated with "product-db-useOptimistic" route.
2.When a user submits the search it instantly navigates ti the products page cliet side and the form data gets turned into 
URL params .
3.It will show the loading state while the search results are being fetched .
4.Once the data is ready the results are displayed in the UI.

Data fetching and Mutations summary:-
1. fetch data in client component
2. fetch data in server components with async/await
3. Handle loading and error states with loading.tsx and error.tsx
4. Fetching data diectly from a database.
5. Server actions for data mutations
6. Feedback with useFormStatus and useActionState hook
7. Seperating server actions for use in client components
8. pass additional data to perfomr update and delete operations.
9. Perform optimistic updates
10. Form Component
*/