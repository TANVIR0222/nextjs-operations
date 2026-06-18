"use server";

import { db } from "@/db/drizzle";
import { todo } from "@/migrations/schema";
import { todoType } from "@/types/todoType";

export default async function todoAdd(data: todoType) {
  console.log(data);
  console.log("---------", process?.env?.DATABASE_URL);

  try {
    const result = await db.insert(todo).values(data);
    if (result?.rowCount) console.log(result);
    // alert("success");
  } catch (err) {
    console.log(err);
  }
}
