"use client";

import React from "react";
import SubmitBtn from "./SubmitBtn";
import toast from "react-hot-toast";
import { sendEmail } from "@/actions/sendEmail";

const ContactForm = () => {
  const formSubmit = async (formData) => {
    await sendEmail(formData);
    const { error } = await sendEmail(formData);
    if (error) {
      console.log(error);
      toast.error("Failed to send the message");
    }
    toast.success("Email sent successfully!");
  };

  return (
    <form
      action={formSubmit}
      className="mx-auto mb-10 mt-5 flex w-full max-w-[600px] flex-col rounded-2xl border-2 border-neutral-700 bg-transparent p-5 sm:w-2/3 md:w-3/4"
    >
      <div className="mb-3 flex items-end gap-2">
        <label className="text-neutral-300">Name:</label>
        <input
          name="senderName"
          type="text"
          maxLength={100}
          className="w-full border-b-[1px] border-neutral-700 bg-transparent px-3 py-[2px] text-neutral-400 outline-none"
        />
      </div>
      <div className="mb-3 flex items-end gap-2">
        <label className="text-neutral-300">
          Email<span className="p-1 text-red-600">*</span>:
        </label>
        <input
          name="senderEmail"
          type="email"
          required
          maxLength={100}
          className="w-full border-b-[1px] border-neutral-700 bg-transparent px-3 py-[2px] text-neutral-400 outline-none"
        />
      </div>
      <div className="mb-3 flex items-end gap-2">
        <label className="text-neutral-300">Subject:</label>
        <input
          name="subject"
          type="text"
          maxLength={150}
          className="w-full border-b-[1px] border-neutral-700 bg-transparent px-3 py-[2px] text-neutral-400 outline-none"
        />
      </div>
      <div className="relative mb-3 flex items-start gap-2">
        <label className="text-neutral-300">
          Message<span className="p-1 text-red-600">*</span>:
        </label>
        <textarea
          name="message"
          required
          maxLength={5000}
          className="custom-scrollbar h-[100px] w-full rounded-lg border-[1px] border-neutral-700 bg-transparent p-2 text-sm text-neutral-400 outline-none"
        />
      </div>
      <SubmitBtn />
    </form>
  );
};

export default ContactForm;
