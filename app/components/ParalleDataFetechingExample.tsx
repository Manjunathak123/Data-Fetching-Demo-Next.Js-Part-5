/* Parallel Data Fetching:- 
  when fetching data inside components, you need to be aware of two data fetching patterns
   1. Sequential
   2. Parallel

   1. Sequntail Data fetching:- In sequentila data fetching requests in a component tree are dependent on each other.
   This can lead to longer loading times. in this one fetch depends on the other.
   2. Parallel Data Fetching:- Requests in a route are eagerly initiated and will load data at the same time.
   This reduces the total time it takes to load data.
   -> In this parallel data fetching we will define functions outside the function.
   ->  Test this using http://localhost:3000/user-parallel/1. 
   -> Parallel data fetchinh is particularly useful when when we have multiple independent pieces of data when we have tp fetch.
   instead of fetching one after another we can fetch at once and we can reduce total loading time.

*/