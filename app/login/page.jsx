"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/dashboard");
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }}>
      <div style={{
        border: "1px solid #ccc",
        padding: "30px",
        borderRadius: "10px",
        width: "300px"
      }}>
        <h2>Login</h2>

        <input
          placeholder="Email"
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />

        <input
          placeholder="Password"
          type="password"
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "10px",
            background: "#2563eb",
            color: "white",
            border: "none"
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}