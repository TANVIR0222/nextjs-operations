"use client";

import todoAdd from "@/actions/todoAction";

export default function Home() {
  // const data = await getData();

  // const res = await fetch("http://localhost:3000/api/user");
  // const todo = await res.json();
  // console.log(todo);

  const handle = async () => {
    try {
      // const res = await fetch("http://localhost:3000/api/user", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ id: 1, text: "asfdsadf", done: true }),
      // });
      const res = await todoAdd({ text: "asfdsadf", done: true });

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => handle()}>click</button>
    </div>
  );

  // return <Todos todos={data} />;
}
