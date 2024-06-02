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
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(
        "https://antopolis-task-server.vercel.app/images",
        {
          cache: "no-store",
        }
      );
      const data: TAnimals[] = await response.json();
      setAnimals(data);

      // Extract unique categories
      const uniqueCategories = [
        "All",
        ...Array.from(new Set(data.map((item: TAnimals) => item.name))),
      ];
      setCategories(uniqueCategories);
    };

    fetchImages();
  }, []);

  const filteredAnimals =
    selectedCategory === "All"
      ? animals
      : animals.filter((animal) => animal.name === selectedCategory);

  animals.filter((animal) => animal.name === selectedCategory);
  return (
    <div className="my-12 mx-auto">
      <div className="mb-4 mx-auto">
        <h2 className="text-xl font-semibold my-8 mx-5">Filter by category</h2>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-3 py-3 mx-5 border border-gray-300 rounded"
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
