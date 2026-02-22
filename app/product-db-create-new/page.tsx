import { redirect } from "next/navigation";
import { addProduct } from "../prisma-db";
import { Submit } from "../components/submit";

export default function AddProductPage(){

    /* defining server action to handle form submission
    -> define "use server" directive at top
    -> we connect this function to form by assigning it to action attribute. createProduct automatically receives form data
    -> then we grab the fields we need from form data and call addProduct function from prisma-db.ts file
    -> because we are using "use server" action in a server component we can atlk directly to the database this code
    never reaches the client browser. it's like your api endpoint built right to your component.
    -> finally we can add redirect to take users  back to the products list after created a new item
    */
     
     async function createProduct(formData: FormData){
        "use server";
        const title = formData.get("title") as string;
        const price = formData.get("price") as string;
        const description = formData.get("description") as string;

        //call addProduct from primsa-db 
        await addProduct(title, parseInt(price), description);
        redirect("/products-db");
     }


    return (
    <form action={createProduct} className="p-4 space-y-4 max-w-96">
      <label className="text-white">
        Title
        <input
          type="text"
          className="block w-full p-2 text-black border rounded"
          name="title"
        />
      </label>
      <label className="text-white">
        Price
        <input
          type="number"
          className="block w-full p-2 text-black border rounded"
          name="price"
        />
      </label>
      <label className="text-white">
        Description
        <textarea
          className="block w-full p-2 text-black border rounded"
          name="description"
        />
      </label>
      <Submit />
    </form>
  );
}