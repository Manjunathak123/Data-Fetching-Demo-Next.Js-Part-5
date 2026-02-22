/* Fetching Data with server components:- The RSC architecture supports async and await keywords in server components.
-> This means we can write our data fetching code just like regular Javascript, using async functions coupled with 
await keyword.
-> see user-server folder page.tsx file and see /user-server url.
Request memorization:- when w building next.js applocation we often end up with same data in multiple places.
-> In this we can fetch data wherever you need it in your component tree without worrying about duplcate network
requests.
-> React will only make the actual fetch once and reuse the results for subsequesnt calls during the same render pass.
-> It's a React feature and there by included in next.js
-> Lets you write data-fetching code exactly where you need it rather than having to centralize fetches and pass data
 down through props. 
 -> Notice how simple data fetching with server components just async await with fetch API, no use state or useEffect
 and non of the state menagment complexity we usually deal with.

*/