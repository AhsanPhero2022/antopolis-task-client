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
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await postData(data);
      reset();
    } catch (error) {
      console.error("Failed to submit data:", error);
    }
  };

  return (
    <div className="my-12 px-8 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            className="bg-black text-white mb-5 rounded h-8  px-3 py-2"
            placeholder="inter the name"
            {...register("name")}
          />
        </div>

        <div>
          <input
            className="mb-5 bg-black text-white rounded h-8 px-3 py-2"
            placeholder="inter the photo url"
            {...register("image", { required: true })}
          />

          {errors.image && <span>This field is required</span>}
        </div>

        <input className="btn btn-accent text-white" type="submit" />
      </form>
    </div>
  );
};

export default ImageUpload;
