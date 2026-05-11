"use client";

import { useState } from "react";
import DataJson from "../utils/data.json";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredData = DataJson.filter((item) =>
    item.firstname.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name..."
        className="border p-3 w-full rounded-2xl mb-6 outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 border-2 p-4 rounded-2xl shadow-sm"
          >

            <div className="flex items-center gap-3">
              <img
                src={item.image}
                alt={item.firstname}
                className="h-16 w-16 object-cover rounded-full"
              />

              <div className="flex flex-col flex-1">
                <div className="font-bold text-lg sm:text-xl">
                  {item.firstname}
                </div>

                <div className="bg-blue-200 text-gray-200 text-sm px-3 py-1 rounded-full w-fit">
                  {item.job}
                </div>
              </div>
            </div>

            <div className="space-y-1 text-sm sm:text-base">
              <div>Height: {item.height}</div>
              <div>Alive?: {item.alive.toString()}</div>
              <div>Age: {item.age}</div>
            </div>

            <div className="space-y-3">
              <div className="font-semibold">Items:</div>

              {item.items.map((subItem) => (
                <div
                  key={subItem.id}
                  className="border bg-gray-200 rounded-xl p-2 flex flex-col gap-2"
                >
                  <div>{subItem.name}</div>

                  <img
                    src={subItem.Image}
                    alt={subItem.name}
                    className="w-full h-70 object-cover rounded-xl"
                  />
                </div>
              ))}
            </div>
            <button className="bg-red-400 hover:bg-red-500 transition text-white rounded-2xl py-2 w-full">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}