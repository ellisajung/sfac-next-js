export default async function ServerOne() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <>
      <h1>ServerOne Component</h1>
    </>
  );
}
