// components/PaperTexture.tsx
export default function PaperTexture() {
  return (
    <div
      className="fixed inset-0 z-9999 pointer-events-none mix-blend-multiply"
      style={{
        opacity: 0.5,
        backgroundImage: "url('/paper-texture.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "300px 300px",
      }}
    />
  );
}