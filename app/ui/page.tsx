import Link from "next/link";

export default async function Post() {
  return (
    <ul>
      <li>
        <Link href={`/blog/${1}`}>
          <h1>click</h1>
        </Link>
      </li>
    </ul>
  );
}
