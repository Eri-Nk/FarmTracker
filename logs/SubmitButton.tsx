"use client";
import { useFormStatus } from "react-dom";
type SubmitButtonProps = {
  idleText: string;
  pendingText: string;
};

export default function SubmitButton({
  idleText,
  pendingText,
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className=" w-full
    bg-green-600
    text-white
    px-4
    py-3
    rounded-xl
    disabled:opacity-50"
    >
      {pending ? pendingText : idleText}
    </button>
  );
}
