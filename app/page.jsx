import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to CBC Teacher System</h1>
      <Link href="/login">Go to Login</Link>
    </div>
  );
}