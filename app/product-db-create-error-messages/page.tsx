"use client";

import { useActionState } from "react";
import { FormState, createProduct } from "../actions/products";


export default function AddProductPage(){

  //setting initila form state of type FormState
  const initialState: FormState = {
    errors:{}
  };

  /* useActionState takes two parameters first is serverAction which is createProduct and second id initial form state.
  -> this hook returns current form state, new form action and boolean that action currenlty being executed.lets use 3 values 
  in our component. we will use state to display error messages. so below to each lable we will display the error message 
  -> we will pass formAction to form
  -> we will use pedning to conditionally disable the submit button when the action is being submitted but this is completly optional 
  but we can do that.
  -> if you run this file we will get error because we are using useActionState in a server component. so we can't use use server 
  directive in a component marked with use client directive.
  
  Seperating Server Actions:-
  -> the solution for the above is seperate our server action into its own file keeping our server side logic cleanly seperated 
  from client side component.
  -> to do this create new folder actions and create a folder products.ts 

  */
   const [state, formAction, isPending] =  useActionState(createProduct, initialState);

  /*  lets update createProduct server action to work with this new state

  */

    return (
    <form action={formAction} className="p-4 space-y-4 max-w-96">
      <div>
      <label className="text-white">
        Title
        <input
          type="text"
          className="block w-full p-2 text-black border rounded"
          name="title"
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