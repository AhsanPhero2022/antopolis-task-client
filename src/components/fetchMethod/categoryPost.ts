export type TData = {
  category: string;
};

export const postCategory = async (data: TData) => {
  console.log(data, "postData");
  try {
    const response = await fetch("http://localhost:5000/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    console.log("Success:", result);
    return result;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
