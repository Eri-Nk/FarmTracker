"use client";
import { login } from "@/actions/authActions";
import { useActionState, useState } from "react";
import SubmitButton from "@/logs/SubmitButton";
import { useSearchParams } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowpassword] = useState(false);
  const [state, formAction] = useActionState(login, {
    error: "",
  });
  const searchParams = useSearchParams();
  const from = searchParams.get("from");
  return (
    <main className="max-w-md w-full mx-auto p-4 sm:p-6 ">
      <div className="border  rounded-2xl p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Admin Login</h1>

          <p className="opacity-70 text-sm">
            Enter password to access dashboard.
          </p>
        </div>

        {from === "admin" && (
          <p className="text-sm text-orange-500">
            Please log in to access admin dashboard.
          </p>
        )}

        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 border rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-gray-300">
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="flex-1 min-w-0 rounded-xl p-2 outline-0 border-0 "
              />

              <button
                type="button"
                onClick={() => setShowpassword((prev) => !prev)}
                className="p-2 opacity-70 hover:opacity-100 transition"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
           

            {state.error && (
              <p className="text-red-500 text-sm">{state.error}</p>
            )}
          </div>

          <SubmitButton idleText="Login" pendingText="Logging in..." />
           <div className="text-sm opacity-70 mt-2">Use demo password: admin123</div>
          

        </form>
        
      </div>
    </main>
  );
}
