
import Dashboard from "@/components/dashboard/Dashboard";
import Sidebar from "@/components/sidebar/Sidebar";




export default function Home() {
  return (
    <main className="grid gap-4  p-2 lg:p-4  grid-cols-[50px_1fr] lg:grid-cols-[220px_1fr]">
      <Sidebar />
      <Dashboard />
    </main>
  );
}
