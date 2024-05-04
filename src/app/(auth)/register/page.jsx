"use client";
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";

import Layout from "../ui/Layout";
import Form from "../components/Form";
import { TextField } from "@mui/material";
import axios from "axios";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
     
      if (!/[a-z]/gi.test(data.firstName))
        setError("firstName", { type: "manual", message: "Please fill" ,is:true});
      if (!/[a-z]/gi.test(data.lastName))
        setError("lastName", { type: "manual", message: "Please fill" ,is:true});
      if (!/^[a-z0-9_-]{3,15}$/gi.test(data.username))
        setError("username", { type: "manual", message: "Username invalid" ,is:true});

      for (const i in data) {
        if (!data[i]) {
          setError(i, { type: "manual", message: "Invalid" ,is:true});
        }
      }

      if (data?.password !== data?.confirmPassword) {
        setError("confirmPassword", { type: "manual", message: "Password & Confirm password is not match" ,is:true});
        return;
      }

      // if (errors) return;

      const response = await axios.post("http://localhost:3000/api/register",data);
      
    } catch (err) {
      console.log(err);
      if(err?.response?.data?.message == "email_in_use") setError("email",{type:"manual",message:"email already in use",is:true})
      if(err?.response?.data?.message == "username_in_use") setError("username",{type:"manual",message:"username already in use",is:true})
    }
  };

  return (
    <Layout>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        title="SIGN UP"
        btnName="SIGN UP"
        variant="contained"
      >
        <div className="flex gap-2">
          <TextField
            label={errors?.firstName?.message || "First Name"}
            error={errors?.firstName?.is}
            {...register("firstName")}
          />
          <TextField
            error={errors?.lastName?.is}
            label={errors?.lastName?.message || "Last Name"}
            {...register("lastName")}
          />
        </div>
        <TextField
          error={errors?.username?.is}
          label={errors?.username?.message || "Username"}
          {...register("username")}
        />
        <TextField
          error={errors?.email?.is}
          label={errors?.email?.message || "Email"}
          type="email"
          {...register("email")}
        />
        <TextField
          error={errors?.password?.is}
          label={errors?.password?.message || "Password"}
          {...register("password")}
          type="password"
        />
        <TextField
          error={errors?.confirmPassword?.is}
          label={
            errors?.confirmPassword?.message ||"Confirm Password"
          }
          {...register("confirmPassword")}
          type="password"
        />
      </Form>
      <div className="text-center">
        Already have an account ?{" "}
        <Link href="/login" className="font-bold hover:underline text-sm ">
          Sign In
        </Link>
      </div>
    </Layout>
  );
}
