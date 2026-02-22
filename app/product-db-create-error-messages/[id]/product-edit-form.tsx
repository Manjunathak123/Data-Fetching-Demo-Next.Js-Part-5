"use client";

import { createProduct, editProduct, FormState } from "@/app/actions/products";
import { addProduct, getProduct } from "@/app/prisma-db";
import { Product } from "@/app/products-db/page";
import { useActionState } from "react";


export default function EditProductForm({product}:{product:Product}){
  const initialState: FormState = {
    errors:{}
  };

  const eidtProductWithId = editProduct.bind(null, product.id);

   const [state, formAction, isPending] =  useActionState(eidtProductWithId, initialState);


    return (
    <form action={formAction} className="p-4 space-y-4 max-w-96">
      <div>
      <label className="text-white">
        Title
        <input
          type="text"
          className="block w-full p-2 text-black border rounded"
          name="title"
          defaultValue={product.title}
        />
      </label>
      {state.errors.title && (<p className="text-red-500">{state.errors.title}</p>)}
      </div>
      <div>
      <label className="text-white">
        Price
        <input
          type="number"
          className="block w-full p-2 text-black border rounded"
          name="price"
          defaultValue={product.price}
        />
      </label>
      {state.errors.price && (<p className="text-red-500">{state.errors.price}</p>)}
      </div>
      <div>
      <label className="text-white">
        Description
        <textarea
          className="block w-full p-2 text-black border rounded"
          name="description"
          defaultValue={product.description ?? ""}
        />
      </label>
      {state.errors.description && (<p className="text-red-500">{state.errors.description}</p>)}
      </div>
      <button type="submit"
        className="block w-full p-2 text-white bg-blue-500 rounded disbaled:bg-gray-500"
        disabled={isPending}>
            Submit
        </button>
      {/* <Submit /> */}
    </form>
  );
}