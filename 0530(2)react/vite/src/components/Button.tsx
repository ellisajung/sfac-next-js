//

// const user = {
//   name: "John",
//   age: 30,
// }; // user와 같은 더미 데이터는 바깥에

export default function Button() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
    console.log(e);
  // 컴포넌트를 불러올 때마다 다시 호출해야 하는 경우면 안에 정의
  return <button onClick={handleClick}>click</button>;
}
