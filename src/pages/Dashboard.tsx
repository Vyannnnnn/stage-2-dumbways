import PageTitle from "@/components/mycomponents/PageTitle";

export default function Dashboard() {
  return (
    <div className="min-h-screen  bg-gray-100">
      <PageTitle
        title="Welcome to the Dashboard"
        desc="Manage your products, view orders, and analyze sales data"
      />
    </div>
  );
}
