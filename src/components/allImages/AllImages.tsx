"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

type TAnimals = {
  name: string;
  _id: string;
  image: string;
  category: string;
};

const AllImages = () => {
  const [animals, setAnimals] = useState<TAnimals[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch("http://localhost:5000/images", {
        cache: "no-store",
      });
      const data: TAnimals[] = await response.json();
      setAnimals(data);

      // Extract unique categories
      const uniqueCategories = [
        "all",
        ...Array.from(new Set(data.map((item: TAnimals) => item.name))),
      ];
      setCategories(uniqueCategories);
    };

    fetchImages();
  }, []);

  const filteredAnimals =
    selectedCategory === "all"
      ? animals
      : animals.filter((animal) => animal.name === selectedCategory);

  animals.filter((animal) => animal.name === selectedCategory);
  return (
    <div className="my-12 mx-auto">
      <div className="mb-4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-3">
        {filteredAnimals.map((item: TAnimals) => (
          <div key={item._id} className="card card-compact w-auto shadow-xl">
            <figure>
              <Image
                className="w-[140px] h-[120px]"
                width={200}
                height={200}
                src={item.image}
                alt="image loading..."
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllImages;

// "use server";
// import Image from "next/image";
// import React from "react";

// type TAnimals = {
//   name: string;
//   _id: string;
//   image: string;
// };

// const AllImages = async () => {
//   const products = await fetch("http://localhost:5000/images", {
//     cache: "no-store",
//   });
//   const animals = await products.json();

//   return (
//     <div className="my-12 mx-auto">
//       <div className="grid  lg:grid-cols-6 md:grid-cols-3 gap-3">
//         {animals?.map((item: TAnimals) => (
//           <div key={item._id} className="card card-compact w-auto shadow-xl">
//             <figure>
//               <Image
//                 className="w-[140px] h-[120px]"
//                 width={200}
//                 height={200}
//                 src={item.image}
//                 alt="image loading..."
//               />
//             </figure>

//             <div className="card-body">
//               <h2 className="card-title">{item.name}</h2>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllImages;
