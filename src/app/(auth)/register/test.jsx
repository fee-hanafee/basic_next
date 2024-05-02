import React from "react";
import Layout from "../ui/Layout";
import Form from "../components/Form";
import { TextField } from "@mui/material";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <Layout>
      <Form title="SIGN UP" btnName="SIGN UP" variant="contained">
        <div className="flex gap-2">
          <TextField placeholder="First Name" />
          <TextField placeholder="Last Name" />
        </div>
        <TextField placeholder="Username" />
        <TextField placeholder="Email" />
        <TextField placeholder="Password" />
        <TextField placeholder="Confirm Password" />
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
