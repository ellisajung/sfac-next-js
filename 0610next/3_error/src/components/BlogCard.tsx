// "use client";
// 서버 컴포넌트일 경우 reset 함수가 정상적으로 실행되지 않는다

function BlogCard() {
  const random = Math.ceil(Math.random() * (4 - 1) + 1);
  console.log(random);
  if (random === 2) {
    throw new Error("random error");
  }
  return <div>BlogCard component</div>;
}

export default BlogCard;
