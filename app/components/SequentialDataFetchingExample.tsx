/* Sequential Data Fecthing:-  
      when fetching data inside components, you need to be aware of two data fetching patterns
      1. Sequential
      2. Parallel

   1. Sequntail Data fetching:- In sequentila data fetching requests in a component tree are dependent on each other.
   This can lead to longer loading times. in this one fetch depends on the other.
   -> For this example we will create a Posts component
    1. fteches all posts
    2. For each post, fetch author using the userId property
    3. this is a example of sequential fetching because we need the userid from each post before we can fetch its author.
    -> see example of post-sequential page.tsx and author.tsx files. this perfect example of sequentail fetching. first we fetch
    all posts from /posts api then for each post we render another post api to fetch its authors details. each author request has to
    wait for the post request to complete because we need userId from individual posts.
    ->


*/