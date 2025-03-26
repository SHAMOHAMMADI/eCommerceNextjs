import axios from "axios";
import mysql from "mysql2/promise";
import { NextApiRequest, NextApiResponse } from "next";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ImportResult {
  success: boolean;
  count?: number;
  error?: string;
}

export async function importFakeStoreData(): Promise<ImportResult> {
  try {
    const { data: products } = await axios.get<Product[]>(
      "https://fakestoreapi.com/products"
    );

    const connection = await mysql.createConnection({
      host: "localhost",
      // user: process.env.DB_USER,
      // password: process.env.DB_PASSWORD,
      // database: process.env.DB_NAME

      user: "root",
      password: "foo",
      database: "ecommercenextjs",
    });

    for (const product of products) {
      await connection.execute("INSERT INTO products VALUES(?,?,?,?,?,?,?,?)", [
        product.id,
        product.title,
        product.price,
        product.description,
        product.category,
        product.image,
        product.rating.rate,
        product.rating.count,
      ]);
    }

    await connection.end();
    return { success: true, count: products.length };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { success: false, error: message };
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const result = await importFakeStoreData();
  res.status(result.success ? 200 : 500).json(result);
}
