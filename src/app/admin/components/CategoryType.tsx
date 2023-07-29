import ModalAdd from "./ModalAdd";

import dynamic from "next/dynamic";
import { RootState } from "@/app/redux/store";

async function getData() {
  "use server";
  const categories = await fetch("http://localhost:3000/api/getCategories", {
    cache: "no-store",
    next: {
      revalidate: 10,
    },
  });

  if (!categories.ok) {
    throw new Error("No categories");
  }
  return categories.json();
}

async function addData(formData: FormData) {
  "use server";
}
const TableComponent = dynamic(() => import("../components/TableComponent"), {
  ssr: false,
});

const CategoryTypeData = async () => {
  const categories = await getData();
  return (
    <>
      <div className="flex justify-between items-start ">
        <header className=" ">
          <div className="grid gap-2 ">
            <span className="nameField text-sm font-bold text-slate-800 ">
              Category Type
            </span>
            <span className="text-xs ">
              Aqui estão todos as categorias gerais do sistema
            </span>
          </div>
        </header>
        <ModalAdd data={categories}> </ModalAdd>
      </div>
      <div className="dataFields py-4 ">
        <TableComponent data={categories} />
      </div>
    </>
  );
};

export default CategoryTypeData;
