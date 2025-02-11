//NAVIGATON BAR AT THE TOP 
import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "50px", textAlign: "center" }}>
      <Link href="/" style={{ margin: "0 10px" }}>Home</Link> |
      <Link href="/about" style={{ margin: "0 10px" }}>About</Link> |
      <Link href="/contact" style={{ margin: "0 10px" }}>Contact</Link>
    </nav>
  );
}
