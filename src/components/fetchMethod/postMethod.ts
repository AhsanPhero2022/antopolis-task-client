import { toast } from "sonner";

export type TData = {
  name: string;
  image: string;
};

export const postData = async (data: TData) => {
  console.log(data, "postData");
  try {
    const response = await fetch(
      "https://antopolis-task-server.vercel.app/images",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (response.ok) {
      toast.message("Animal added successfully");
    }

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
