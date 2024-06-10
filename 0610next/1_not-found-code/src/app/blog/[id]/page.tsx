import { redirect } from "next/navigation";

export default function BlogId({ params: { id } }: { params: { id: string } }) {
  // const number = parseInt(id, 10);
  // if (Number.isNaN(number)) redirect("/blog/page/notfound");
  const number = parseInt(id, 10);
  if (Number.isNaN(number)) redirect("/blog/page/notfound");
  return (
    <>
      <h1>BlogId Component</h1>
    </>
  );
}
