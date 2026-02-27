"use client";

/* useOptimistic hook takes two parameters, first parameter is the initial state that you want to
 optimistically update and second argument is the function that determines how to update the state optimistically,
 this function takes two parameters the current state that is currentProcuts and additional argument that is productId 
 which corresponds to the product that we want to delete.

*/

import { Product } from "@prisma/client";
import { useOptimistic } from "react";
import { removeProduct } from "../actions/products";
import Link from "next/link";

/* useOptimistic function returns two things first is resulting optimistic state that is optimisticProduct and second is 
 the function to trigger the optimistic update. to make use of these values we will iterate over optimisticProducts and we will 
 create async function removeProductById that takes productId of type number and calling removeProduct function . 
 in this function before calling server action we will trgigger optimistic update this immediatly show the changes while 
 action deletion happens in the background. 
 -> If we run this we will get error because we are using hook in server component so move data fetching logic to
 seperate component. create a new file product-details.tsx in product-db-useOptimistic folder.

 */

export const ProductDetails=({products}:{products:Product[]})=>{

    console.log('entering into function');

  const [optimisticProducts, setOptimisticProducts] =   useOptimistic(products, (currentProducts, productId)=>{

        // current function filter the product to exclude the product with given id. we will retunr updated list as optimistic state
        return currentProducts.filter((product)=>product.id !== productId);

    });
    console.log('optimisticProducts',optimisticProducts);

    const removeProductById = async (productId: number) =>{
        setOptimisticProducts(productId);
        await removeProduct(productId);
    }

    console.log('optimisticProducts',optimisticProducts);
    return (
        <ul className="space-y-4 p-4">
         {
            optimisticProducts.map((product)=>(
                <li key={product.id}
                className="p-4 bg-white shadow-md rounded-lg text-gray-700">
                 <h2 className="text-xl font-semibold">
                   <Link href={`/product-db-create-error-messages/${product.id}`}>{product.title}</Link> 
                    </h2>
                 <p>{product.description}</p>
                 <p className="text-lg font-medium">${product.price}</p>
                 <form action={removeProductById.bind(null, product.id)}>
                 <button type="submit" className="bg-red-500">
                    Delete
                </button>
                </form>
                </li>
                
            ))
         }
        </ul>
    )
}
