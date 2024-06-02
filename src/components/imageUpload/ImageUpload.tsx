"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import { ReactNode } from "react";
import { postData } from "../fetchMethod/postMethod";
type Inputs = {
  name: string;
  image: string;
  data: ReactNode;
};

const ImageUpload = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await postData(data);
    } catch (error) {
      console.error("Failed to submit data:", error);
    }
  };
  // write post method in here
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="test" {...register("name")} />

        <input {...register("image", { required: true })} />

        {errors.image && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default ImageUpload;
