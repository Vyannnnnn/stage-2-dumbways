export default function PageTitle({ title, desc }: { title: string; desc: string }) {
  return (
    <section className="bg-white border-b border-gray-200 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{title}</h1>
        <p className="text-gray-600">
          {desc}
        </p>
      </div>
    </section>
  );
}
