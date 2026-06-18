import { todoType } from "@/types/todoType";

export default async function todoAdd(data: todoType) {
  console.log(data);
  console.log("---------", process?.env?.DATABASE_URL);

  // try {
  //   const res = await db.insert(todo).values(data);
  // } catch (err) {
  //   console.log(err);
  // }
}
