import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import "dotenv/config";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const adapter = new PrismaPg(pool as any);
const prisma = new PrismaClient({
  adapter,
});

async function main() {
  // Hapus produk yang sudah ada
  await prisma.product.deleteMany();

  // Buat 20 produk dengan userId = 1
  const products = [
    {
      name: "Laptop Dell XPS 13",
      price: 1200000,
      stock: 5,
      description: "Laptop ringkas dengan performa tinggi",
      userId: 1,
    },
    {
      name: "Mouse Logitech MX Master",
      price: 850000,
      stock: 15,
      description: "Mouse ergonomis profesional",
      userId: 1,
    },
    {
      name: "Keyboard Mechanical RGB",
      price: 650000,
      stock: 20,
      description: "Keyboard mekanik dengan lampu RGB",
      userId: 1,
    },
    {
      name: "Monitor LG 27 Inch 4K",
      price: 3500000,
      stock: 8,
      description: "Monitor 4K dengan warna akurat",
      userId: 1,
    },
    {
      name: "Headphone Sony WH-1000XM5",
      price: 4200000,
      stock: 12,
      description: "Headphone noise cancelling terbaik",
      userId: 1,
    },
    {
      name: "Webcam Logitech C920",
      price: 750000,
      stock: 25,
      description: "Webcam HD untuk streaming",
      userId: 1,
    },
    {
      name: "SSD Samsung 970 EVO 1TB",
      price: 1100000,
      stock: 30,
      description: "SSD NVMe super cepat",
      userId: 1,
    },
    {
      name: "RAM Corsair 16GB DDR4",
      price: 800000,
      stock: 18,
      description: "RAM gaming berkualitas tinggi",
      userId: 1,
    },
    {
      name: "Power Supply Corsair 850W Gold",
      price: 1500000,
      stock: 10,
      description: "PSU modular 850W efisien emas",
      userId: 1,
    },
    {
      name: "GPU RTX 4070 Super",
      price: 8500000,
      stock: 3,
      description: "Kartu grafis gaming performa maksimal",
      userId: 1,
    },
    {
      name: "Monitor ASUS 144Hz Gaming",
      price: 2800000,
      stock: 7,
      description: "Monitor 144Hz untuk gaming kompetitif",
      userId: 1,
    },
    {
      name: "Chair Gaming DXRacer",
      price: 3200000,
      stock: 6,
      description: "Kursi gaming ergonomis premium",
      userId: 1,
    },
    {
      name: "Desk Lampu LED Smart",
      price: 450000,
      stock: 40,
      description: "Lampu meja LED dengan kontrol suara",
      userId: 1,
    },
    {
      name: "Microphone Blue Yeti",
      price: 1800000,
      stock: 9,
      description: "Microphone podcast dan streaming berkualitas",
      userId: 1,
    },
    {
      name: "External SSD 2TB Portable",
      price: 2100000,
      stock: 14,
      description: "Storage eksternal cepat dan portabel",
      userId: 1,
    },
    {
      name: "USB Hub 7 Port",
      price: 350000,
      stock: 50,
      description: "Hub USB dengan power supply",
      userId: 1,
    },
    {
      name: "Cooling Pad Laptop",
      price: 280000,
      stock: 35,
      description: "Alas pendingin laptop dengan kipas",
      userId: 1,
    },
    {
      name: "Dock Station USB-C",
      price: 1200000,
      stock: 11,
      description: "Docking station multifungsi USB-C",
      userId: 1,
    },
    {
      name: "Cable HDMI 2.1 Premium",
      price: 180000,
      stock: 100,
      description: "Kabel HDMI berkualitas 8K ready",
      userId: 1,
    },
    {
      name: "Stand Monitor Adjustable",
      price: 520000,
      stock: 22,
      description: "Stand monitor dengan penyesuaian tinggi",
      userId: 1,
    },
  ];

  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }

  console.log(`✅ Seeding berhasil!`);
  console.log(`📝 Ditambahkan ${products.length} produk`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
