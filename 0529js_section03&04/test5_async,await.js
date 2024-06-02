// 참고) https://velog.io/@tosspayments/%EC%98%88%EC%A0%9C%EB%A1%9C-%EC%9D%B4%ED%95%B4%ED%95%98%EB%8A%94-awaitasync-%EB%AC%B8%EB%B2%95

function getApple() {
  return new Promise((resolve, reject) => {
    resolve("🍎");
  });
}

// async를 쓰면 resolve를 반환하는 프로미스를 반환하는 것과 같음
async function getApple() {
  // throw new Error("error");
  return "🍎";
}

getApple()
  .then((apple) => {
    console.log(apple);
  })
  .catch((err) => {
    console.log(err);
  });

// apple & banana
// async & await
async function getApple() {
  return "🍎";
}

async function getBanana() {
  return "🍌";
}

async function pickFruits() {
  getApple().then((apple) => console.log(apple));
  getBanana().then((banana) => console.log(banana));
}

pickFruits();

// 사과가 지연되도 순서 보장하려면?
function delay(ms, value) {
  return new Promise();
}

async function getApple() {
  await delay(1000);
  return "🍎";
}

async function getBanana() {
  return "🍌";
}

// await가 필요한 이유

async function pickFruits() {
  const apple = getApple();
  const banana = getBanana();
  console.log(apple);
  console.log(banana);
  // 프로미스 객체가 펜딩 상태로 반환되는데, 펼쳐보면 풀필드임
}

// 이를 해결하려면 then을 호출해야하는데
// 이와 같이 적으면 콜백 헬과 다를 것이 없...
async function pickFruits() {
  getApple().then((apple) => {
    console.log(apple);
    getBanana().then((banana) => {
      console.log(banana);
    });
  });
}

// 함수 앞에 await 붙여서 가독성 개선
async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  console.log(apple);
  console.log(banana);
}

// banana까지 지연되는 상황이라면?
// 병렬 처리하기
// 위의 코드로 하면 6s, 병렬 처리하면 4s가 걸림
async function getApple() {
  await delay(2000);
  return "🍎";
}

async function getBanana() {
  await delay(4000);
  return "🍌";
}

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  // 어차피 4초가 걸리기 때문에 애플, 바나나 적는 순서는 상관없음
  const apple = await applePromise;
  const banana = await bananaPromise;
  console.log(apple, banana);
  // Promise.all((getApple(), getBanana()));
  // getBanana().then((apple) => console.log(apple));
}

// 병렬 처리 가독성 개선
// Promise.all
// 장점 - 병렬 처리
// 단점 1
// 메모리를 많이 잡아먹어서(서버의 자원을 많이 잡아먹어서) 서버 성능이 좋아야..
// 하지만 애초에 그정도 서버가 필요한 회사라면 서버 걱정은 안해도 되고, 요즘 autoscaling(서버가 부족할 경우 EC2를 복사)이 지원이 잘됨
// 단점 2
// all로 묶여져서 api를 불러올 떄 하나에서 에러가 생기면 전체 에러가 생김
// 대안) allSettled -
// all vs allSettled
// 하지만, 하나라도 에러가 나면 안되는 상황이라면 all을 쓰는 게 나을 수도
// 애초에 안정성이 어느정도 보장된 상태에서 배포
// 또 allSettled는 값에 바로 접근할 수 없고 value를 통해 접근해야 하는 번거러움 존재
async function pickFruits() {
  const [apple, banana] = await Promise.all([getApple(), getBanana()]);
}
console.log(apple, banana);

// Promise.race
async function pickFruits() {
  const [apple, banana] = await Promise.race([getApple(), getBanana()]);
}

// 이외에도, Promise가 제공하는 다양한 메서드가 있음

pickFruits();

/* 
!!중요!!

실무에서 api를 하나만 불러오는 경우는 거의 없음.
따라서, fetch하는 api 데이터들의 병렬 처리가 중요함.

(검사 > 네트워크 > Fetch/XHR)

*/
