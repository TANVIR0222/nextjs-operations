"use server";

import { submitValues } from "@/components/tanstack-form";
import { db } from "@/db/drizzle";
import { postTable } from "@/schema/post.schema";

export const postActions = async (data: submitValues) => {
  try {
    await db.insert(postTable).values(data);
  } catch (error) {
    console.log(error);
  }
};

export const getAllPost = async () => {
  try {
    const res = await db.select().from(postTable);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
