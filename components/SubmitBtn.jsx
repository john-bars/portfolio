"use client";

import React from "react";

import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`${!pending && "hover:border-blue-500 hover:bg-blue-700 hover:text-neutral-300"} w-max self-center rounded-full border-2 border-transparent px-3 py-2 font-semibold text-blue-600`}
    >
      {pending ? (
        <div className="size-6 animate-spin rounded-full border-b-2 border-blue-500"></div>
      ) : (
        "Send Message"
      )}
    </button>
  );
}
