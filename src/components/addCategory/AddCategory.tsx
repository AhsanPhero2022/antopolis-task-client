"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { ReactNode } from "react";
import { postCategory } from "../fetchMethod/categoryPost";
type Inputs = {
  category: string;
  data: ReactNode;
};

const AddCategory = () => {
  const {
    register,

    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await postCategory(data);
    } catch (error) {
      console.error("Failed to submit data:", error);
    }
  };

  return (
    <div className="my-12 px-8 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            className="mb-5 bg-black text-white rounded h-8 px-3 py-2"
            placeholder="add category"
            {...register("category", { required: true })}
          />

          {errors.category && <span>This field is required</span>}
        </div>

        <input className="btn btn-accent text-white" type="submit" />
      </form>
    </div>
  );
};

export default AddCategory;
