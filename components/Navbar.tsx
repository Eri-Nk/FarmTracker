import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur border-b z-50">
      <nav className="max-w-5xl mx-auto p-4 flex items-center gap-6 ">
        <NavLink href="/">Home</NavLink>

        <NavLink href="/admin">Admin</NavLink>
      </nav>
    </header>
  );
}
