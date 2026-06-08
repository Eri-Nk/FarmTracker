"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type LoginState = {
  error: string;
};

export async function login(
  prevState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const password = formData.get("password");
  if (typeof password !== "string" || password.trim() === "") {
    return {
      error: "Password is required",
    };
  }
  if (password !== "admin123") {
    return {
      error: "Invalid password",
    };
  }
  const cookieStore = await cookies();
  cookieStore.set("auth", "true", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60,
    path: "/",
  });
  redirect("/admin");
}

export async function logout() {
  const cookieStore = await cookies();

  cookieStore.set("auth", "", {
    expires: new Date(0),
  });

  redirect("/login");
}
