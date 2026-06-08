import NavLink from "./NavLink";
import { cookies } from "next/headers";
import { logout } from "@/actions/authActions";

export default async function Navbar() {
  const cookieStore = await cookies();

  const auth = cookieStore.get("auth")?.value;
  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur border-b z-50">
      <nav className="max-w-5xl mx-auto p-4 flex items-center justify-between gap-4 text-gray-700 ">
        <div className="flex items-center gap-6">
          <NavLink href="/">Home</NavLink>

          <NavLink href="/admin">Admin</NavLink>
        </div>

        <div className="flex items-center gap-4">
          {auth === "true" ? (
            <form action={logout}>
              <button
                type="submit"
                className="font-medium opacity-70 hover:opacity-100 transition"
              >
                Logout
              </button>
            </form>
          ) : (
            <NavLink href="/login">Login</NavLink>
          )}
        </div>
      </nav>

      {auth === "true" && (
        <div className="max-w-5xl mx-auto px-4 pb-2">
          <p className="text-sm text-gray-500 ">Admin Session Active</p>
        </div>
      )}
    </header>
  );
}
