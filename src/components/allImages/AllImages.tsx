import Image from "next/image";
import React from "react";

type TAnimals = {
  name: string;
  _id: string;
  image: string;
};

const AllImages = async () => {
  const products = await fetch("http://localhost:5000/images", {
    cache: "no-cache",
  });
  const animals = await products.json();

  return (
    <div className="my-12">
      <div className="grid lg:grid-cols-3 gap-3">
        {animals?.map((item: TAnimals) => (
          <div
            key={item._id}
            className="card card-compact w-auto bg-base-100 shadow-xl"
          >
            <figure>
              <Image
                className="w-full h-[250px]"
                width={300}
                height={300}
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
      <div className="my-12  text-center">
        <button className="btn">Load More</button>
      </div>
    </div>
  );
};

export default AllImages;
