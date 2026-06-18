import { db } from "@/db/drizzle";
import { todo } from "@/schema/schema";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await db.select().from(todo);
    return Response.json(res);
  } catch (error) {
    console.log(error);
  }

  return Response.json({ message: "Hello World" });
}

export async function POST(req: Request) {
  // console.log("--------11-------", req);
  try {
    const body = await req.json();

    const res = await db.insert(todo).values({ text: "asfdsadf", done: true });

    console.log(res);

    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
  }
}
