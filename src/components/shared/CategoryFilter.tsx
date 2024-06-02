const CategoryFilter = async () => {
  const products = await fetch("http://localhost:5000/categoryFilter", {
    cache: "no-store",
  });
  const animals = await products.json();

  console.log(animals);
  return <div></div>;
};

export default CategoryFilter;
