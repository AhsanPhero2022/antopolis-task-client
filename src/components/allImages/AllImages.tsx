"use server";
import Image from "next/image";
import React from "react";

type TAnimals = {
  name: string;
  _id: string;
  image: string;
};

const AllImages = async () => {
  const products = await fetch("http://localhost:5000/images", {
    cache: "no-store",
  });
  const animals = await products.json();

  return (
    <div className="my-12 mx-auto">
      <div className="grid  lg:grid-cols-6 md:grid-cols-3 gap-3">
        {animals?.map((item: TAnimals) => (
          <div key={item._id} className="card card-compact w-auto shadow-xl">
            <figure>
              <Image
                className="w-[80px] h-[100px]"
                width={100}
                height={100}
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
