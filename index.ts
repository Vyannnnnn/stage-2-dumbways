interface Book {
  id: number | string;
  title: string;
  author: string;
  isAvailable: boolean;
  publishedYear: number;
  category?: string;
}

interface Member {
  id: number | string;
  name: string;
  email: string;
  phone?: string;
}

const books: Book[] = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isAvailable: true,
    publishedYear: 1925,
    category: "Fiction",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isAvailable: false,
    publishedYear: 1960,
    category: "Fiction",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    isAvailable: true,
    publishedYear: 1948,
    category: "Dystopian Fiction",
  },
];

const members: Member[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "098-765-4321",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    phone: "555-1234",
  },
];


function getBookData(id: number | string): Book | undefined {
  return books.find((book) => book.id === id);
}

function getAllBooks(): void {
  console.log("=== All Books ===");
  books.forEach((book) => {
    console.log(`ID: ${book.id}`);
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Published Year: ${book.publishedYear}`);
    console.log(`Category: ${book.category || "N/A"}`);
    console.log(`Available: ${book.isAvailable ? "Yes" : "No"}`);
    console.log("---");
  });
}

function checkBookStatus(id: number | string): void {
  const book = getBookData(id);

  if (!book) {
    console.log(`❌ Buku dengan ID ${id} tidak ditemukan`);
    return;
  }

  console.log(`\n📚 Status Buku ID: ${id}`);
  console.log(`Judul: ${book.title}`);
  console.log(`Penulis: ${book.author}`);
  console.log(
    `Status: ${book.isAvailable ? "✅ Tersedia" : "❌ Tidak Tersedia"}`,
  );
  console.log(`Tahun Terbit: ${book.publishedYear}`);
  console.log(`Kategori: ${book.category || "N/A"}`);
}


getAllBooks();

console.log("\n=== Check Book Status ===");
checkBookStatus(1);
checkBookStatus(2);
checkBookStatus(3);
