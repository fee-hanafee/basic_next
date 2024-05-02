"use client";
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";

import Layout from "../ui/Layout";
import Form from "../components/Form";
import { TextField } from "@mui/material";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (!/[a-z]/gi.test(data.firstName))
      setError("firstName", { type: "manual", message: true });
    if (!/[a-z]/gi.test(data.lastName))
      setError("lastName", { type: "manual", message: true });
    if (!/^[a-z0-9_-]{3,15}$/gi.test(data.username))
      setError("username", { type: "manual", message: true });

    for (const i in data) {
      if (!data[i]) {
        setError(i, { type: "manual", message: true });
      }
    }

    if (data?.password !== data?.confirmPassword) {
      setError("confirmPassword", { type: "manual", message: true });
      return;
    }
    if (errors) return;
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
            label="First Name"
            error={errors?.firstName?.message}
            {...register("firstName")}
          />
          <TextField
            error={errors?.lastName?.message}
            label="Last Name"
            {...register("lastName")}
          />
        </div>
        <TextField
          error={errors?.username?.message}
          label="Username"
          {...register("username")}
        />
        <TextField
          error={errors?.email?.message}
          label="Email"
          type="email"
          {...register("email")}
        />
        <TextField
          error={errors?.password?.message}
          label="Password"
          {...register("password")}
          type="password"
        />
        <TextField
          error={errors?.confirmPassword?.message}
          label="Confirm Password"
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
