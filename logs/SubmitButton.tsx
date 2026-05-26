"use client";
import { useFormStatus } from "react-dom";
import React from "react";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-black text-white px-4 py-2 rounded-lg disabled:opacity-50"
    >
      {pending ? "Submitting..." : "Submit Log"}
    </button>
  );
}
