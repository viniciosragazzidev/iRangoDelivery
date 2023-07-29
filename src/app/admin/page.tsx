import React from "react";
import CategoryTypeData from "./components/CategoryType";

const AdminPage = () => {
  return (
    <main className="w-full min-h-screen flex flex-col gap-2 p-5">
      <h1 className="text-2xl font-bold text-red-500">
        Dashboard
        <span className="text-slate-800"> Page</span>
      </h1>

      <div className="grid grid-cols-2 max-xl:grid-cols-1 self-center   gap-5 divide-x-2 py-8">
        <div className="boxAdd w-full  max-w-3xl  p-4">
          <CategoryTypeData />
        </div>
      </div>
    </main>
  );
};

export default AdminPage;
