import React, { useState } from "react";
import Button from "../../Button";
import Input from "./Input";
import Textarea from "./Textarea";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Form() {
  const [message, setMessage] = useState(false);
  const schema = yup.object().shape({
    name: yup.string().min(3).max(10).required(),
    email: yup.string().email().required(),
    subject: yup.string().min(2).max(15).required(),
    text: yup.string().min(2).max(100).required()
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });
  const onFormSubmit = () => {
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
    }, 5000);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-7">
          <div className="flex flex-col gap-4 font-Vazir-Medium text-[13px] tracking-tight lg:flex-2/5">
            <Input
              placeHolder={"نام *"}
              register={register("name")}
              errors={errors.name}
            ></Input>
            <Input
              placeHolder={"ایمیل *"}
              register={register("email")}
              errors={errors.email}
            ></Input>
            <Input
              placeHolder={"موضوع"}
              register={register("subject")}
              errors={errors.subject}
            ></Input>
          </div>
          <div className="pt-4 bg-gray-100 font-Vazir-Medium text-[13px] tracking-tight lg:flex-3/5 lg:pt-0">
            <Textarea
              placeholder={"پیام *"}
              register={register("text")}
              errors={errors.text}
            ></Textarea>
          </div>
        </div>
        <a className="relative pt-6 flex justify-center mx-auto">
          <Button text={"ارسال پیام"}></Button>
          <span
            className={`${
              message ? "visible" : "invisible"
            } absolute -bottom-13 font-Vazir-light text-sm py-1 px-3 rounded-sm bg-green-600/50`}
          >
            پیام ارسال شد
          </span>
        </a>
      </form>
    </div>
  );
}
