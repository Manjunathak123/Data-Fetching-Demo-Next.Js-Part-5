/* useOptimistic hook takes two parameters, first parameter is the initial state that you want to
 optimistically update and second argument is the function that determines how to update the state optimistically,
 this function takes two parameters the current state that is currentProcuts and additional argument that is productId 
 which corresponds to the product that we want to delete.

*/

import { getProducts } from "../prisma-db";
import { Product } from "../products-db/page";
import { ProductDetails } from "./product-details";

export default async function ProductsDbUseOptimistic(){
    const products: Product[] = await getProducts();
 /* useOptimistic function returns two things first is resulting optimistic state that is optimisticProduct and second is 
 the function to trigger the optimistic update. to make use of these values we will iterate over optimisticProducts and we will 
 create async function removeProductById that takes productId of type number and calling removeProduct function . 
 in this function before calling server action we will trgigger optimistic update this immediatly show the changes while 
 action deletion happens in the background. 
 -> If we run this we will get error because we are using hook in server component so move data fetching logic to
 seperate component. create a new file product-details.tsx in product-db-useOptimistic folder.
-> Now page.tsx is a sever component
 */

console.log('getProduct', products);
return <ProductDetails products={products}/>;
}
