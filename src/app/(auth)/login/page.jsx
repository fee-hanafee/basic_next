"use client";
import React, { useState } from "react";
import Link from "next/link";

import TextField from "@mui/material/TextField";
import Form from "../components/Form";
import AnotherChoiceLogin from "./AnotherChoiceLogin";
import Layout from "../ui/Layout";
import axios from "axios";

const initialValue = { username: "", password: "" };
export default function LoginPage() {
  const [input, setInput] = useState(initialValue);
  const [isError, setIsError] = useState({});

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setIsError({ ...isError, [e.target.name]: false });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (input.username.trim() == "")
        return setIsError({ ...isError, username: true });
      if (input.password.trim() == "")
        return setIsError({ ...isError, password: true });
      const response = await axios.post(
        "http://localhost:3000/api/login",
        input
      );

      if (response?.data?.message == "is_wrong")
        return setIsError({ username: true, password: true });

      console.log(response.data.token);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout>
      <Form
        title="SIGN IN"
        btnName="sign in"
        variant="contained"
        onSubmit={handleSubmit}
      >
        <TextField
          label="Username"
          error={isError?.username}
          onChange={handleChange}
          name="username"
          value={input.username}
        />
        <TextField
          label="Password"
          error={isError?.password}
          type="password"
          onChange={handleChange}
          name="password"
          value={input.password}
        />
      </Form>
      <AnotherChoiceLogin />
      <div className="text-center">
        Don't have an account ?{" "}
        <Link href="/register" className="font-bold hover:underline text-sm ">
          Sign Up
        </Link>
      </div>
    </Layout>
  );
}
