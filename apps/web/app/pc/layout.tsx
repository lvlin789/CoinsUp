import type React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <header style={{ padding: "1rem", background: "#222", color: "#fff" }}>
        <h1>CoinsUp PC</h1>
      </header>
      <main style={{ flex: 1, padding: "2rem" }}>{children}</main>
      <footer
        style={{ padding: "1rem", background: "#f5f5f5", textAlign: "center" }}
      >
        © {new Date().getFullYear()} CoinsUp
      </footer>
    </div>
  );
}
