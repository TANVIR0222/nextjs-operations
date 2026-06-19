"use server";

import { db } from "@/db/drizzle";
import { todo } from "@/schema/schema";
import { todoType } from "@/types/todoType";

export default async function todoAdd(data: todoType) {
  try {
    const result = await db.insert(todo).values(data);
    console.log(result?.rowCount);
  } catch (err) {
    console.log(err);
  }
}
