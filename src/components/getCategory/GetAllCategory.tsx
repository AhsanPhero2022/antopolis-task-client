"use server";

type TAnimals = {
  category: string;
  _id: string;
};

const GetAllCategory = async () => {
  const products = await fetch("http://localhost:5000/category", {
    cache: "no-store",
  });
  const animals = await products.json();

  return (
    <div className="my-12 mx-auto">
      <ul className="flex gap-3 ">
        {animals?.map((item: TAnimals) => (
          <li key={item._id} className="btn btn-outline btn-error">
            <h2>{item.category}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetAllCategory;
