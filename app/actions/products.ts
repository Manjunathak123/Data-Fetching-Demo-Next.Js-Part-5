"use server";

import { redirect } from "next/navigation";
import { addProduct, deleteProduct, updateProduct } from "../prisma-db";
import { revalidatePath } from "next/cache";

// the above "use server" is for to mark all exports of that file as server action.


  // creating title, price, description errors and these are optional.
  export type Errors = {
    title?: string;
    price?: string;
    description?: string;
  }

// errors are part of the overall form state. form state contains the key errors and type errors

 export type FormState = {
    errors: Errors;
  }
// bring createProduct server action into this

 export async function createProduct(prevState:FormState, formData: FormData){
        const title = formData.get("title") as string;
        const price = formData.get("price") as string;
        const description = formData.get("description") as string;

        const errors: Errors = {};

  if(!title){
    errors.title = "Title is required";
  }

  if(!price){
    errors.price = "Price is required";
  }

  if(!description){
    errors.description = "description is required";
  }

  // here after validating error messages we are returning updated for state without going to the insert statement. 
  if(Object.keys(errors).length >0){
    return {errors};
  }

        //call addProduct from primsa-db 
        await addProduct(title, parseInt(price), description);
        redirect("/products-db");
     }





export async function editProduct(id:number, prevState:FormState, formData: FormData){
        const title = formData.get("title") as string;
        const price = formData.get("price") as string;
        const description = formData.get("description") as string;

        const errors: Errors = {};

  if(!title){
    errors.title = "Title is required";
  }

  if(!price){
    errors.price = "Price is required";
  }

  if(!description){
    errors.description = "description is required";
  }

  if(Object.keys(errors).length >0){
    return {errors};
  }

        await updateProduct(id, title, parseInt(price), description);
        redirect("/products-db");
    }


  export async function removeProduct(id: number){
        await deleteProduct(id);
        // to refresh the page after deleting the product we can use the function called revalidatePath from next/navigation. we can pass the path that we want to refresh after deleting the product.
        revalidatePath("/products-db-delete");
    }