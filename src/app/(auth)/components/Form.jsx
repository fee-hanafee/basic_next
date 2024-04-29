import React from "react";
import Button from "@mui/material/Button";

export default function Form({
  children,
  onSubmit,
  title = "Title",
  btnName = "Submit",
  variant = "outlined",
 
}) {
  return (
    <div className="w-full">
      <h3 className="font-semibold mb-2">{title}</h3>

      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        {children}
        <Button type="submit" variant={variant} >
          {btnName}
        </Button>
      </form>
    </div>
  );
}
