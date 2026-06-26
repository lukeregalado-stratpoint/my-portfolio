import HomePage from "@/components/HomePage";

export default async function RootPage() {
  await new Promise((r) => setTimeout(r, 0));
  return <HomePage />;
}