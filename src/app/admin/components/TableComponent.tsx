"use client";

import { CategoryType } from "@/app/_types/types";
import { RootState } from "@/app/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TableComponent = (data: { data: any }) => {
  const itens = data.data;
  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );
  const [cat, setCat] = useState<CategoryType[]>([]);

  useEffect(() => {
    if (categories) {
      setCat(categories);
      console.log(categories);
    }
  }, [categories]);
  return (
    <div>
      {cat[0] && cat[0].title}
      <table className="text-xs text-center divide-y-2">
        <tr className="h-8">
          {Object.keys(itens[0]).map((key) => (
            <th key={key} className="px-4">
              {key.toUpperCase()}
            </th>
          ))}
        </tr>

        {itens.map((item: any) => (
          <tr key={item.id} className="h-8">
            {Object.keys(itens[0]).map((key) => (
              <td className="px-4 " key={item.id}>
                {item[key]}
              </td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default TableComponent;
