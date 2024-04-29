"use client";
import React from "react";
import Link from "next/link";

import TextField from "@mui/material/TextField";
import Form from "../components/Form";
import AnotherChoiceLogin from "./AnotherChoiceLogin";
import Layout from "../ui/Layout";

export default function LoginPage() {
  return (
    <Layout>
      <Form title="SIGN IN" btnName="sign in" variant="contained">
        <TextField placeholder="Username" />
        <TextField placeholder="Password" type="password" />
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
