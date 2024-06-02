# 타입 추론

- 타입스크립트가 자동으로 타입을 추론
- 명시적으로 적어도 되지만 권장하지는 않음 (특히 기본자료형)
- 타입 명시가 필요한 주된 경우는 api로 받아오는 데이터의 타입을 미리 정하기 위함

# 변수 선언 let, const

```ts
let hello = "hello typescript";
const bye = "bye typescript";
```

- let: 입력한 데이터의 타입에 따라 타입이 추론됨
- const: 데이터 값 자체가 타입이 됨. 해당 값 외에 같은 타입이라도 재할당 할 수 없음.

# 기본 타입 (9가지)

```ts
const a: string = "hello";
const b: number = 1;
const c: boolean = true;
const d: null = null;
const e: undefined = undefined;
const f: object = { name: "jane" };
const f: { name: string } = { name: "jane" };
const g: symbol = Symbol();
const h: Array<[]> = []; // 대문자 주의
const h: [] = [];
const j: () => void = function () {};
```

```ts
// 다양한 배열 타입 예시
const h: Array<[string]> = ["hello"];
const h: [boolean] = [true];
const h: boolean[] = [true];
const h: [string | number] = ["hello", 10];
const h: (string | number)[] = ["hello", 10];

// 다양한 객체 타입 예시

// 다양한 함수 타입 예시
const j: (a: number, b: number) => number = function (a, b) {
  return a + b;
};
const j: (a: number, b: number) => number = (a, b) => a + b;
```

# 타입 연산자

    - | (or)
    - & (and)

# type 키워드

- 가독성 개선

```ts
// type 키워드 없이 정의
const j: (a: number, b: number) => number = (a, b) => a + b;

// type 키워드 정의
type TSumFn = (a: number, b: number) => number;
const j: TSumFn = (a, b) => a + b;

type TString = string;
const hello: TString = "hello";

type TNumber = number;
const num: TNumber = 10;

type TStringArray = string[] | null;
const likeFood: TStringArray = null;

// type TUser = object
type TGender = "male" | "female";
type TUser = {
  name: string;
  age: number;
  gender?: string; // optional, 기본 타입 지정
  gender?: "male" | "female"; // optional, 구체적인 타입 지정
  gender?: TGender; // optional, type nesting
}; // 객체 아님 주의
let user: TUser = {
  name: "Kim",
  age: 20,
  gender: "female", // optional
};
```

# type 확장 (&)

```ts
type Person = {
  name: string;
  age: number;
};

const person1: Person = {
  name: "Jack",
  age: 32,
};

// 일일이 적기
type MyWorker = {
  name: string; // Person과 겹치는 속성
  age: number; // Person과 겹치는 속성
  company: string;
  position: string;
};

// 타입에서 확장하기
type MyWorker = Person & {
  company: string;
  position: string;
};

const worker1: MyWorker = {
  name: "Smith",
  age: 33,
  company: "Google",
  position: "Developer",
};

// 따로 타입 정의하기
type TEmployee = Person & MyWorker;

const worker1: TEmployee = {
  name: "Smith",
  age: 33,
  company: "Google",
  position: "Developer",
};
```

# readonly 키워드

```ts
type MyWorker = Person & {
  company: string;
  readonly position: string;
  getMoney: (amount: number) => number;
};

type TEmployee = Person & MyWorker;
const worker1: TEmployee = {
  name: "Smith",
  age: 33,
  company: "Google",
  position: "Developer",
  getMoney: (amount: number) => {
    console.log(`I got ${amount} dollars`);
    return amount;
  },
};

worker1.getMoney(1000); // I got 1000 dollars
console.log(worker1.position); // developer
// worker1.position = "Manager"
```

# interface 키워드

```ts
interface IPerson {
  name: string;
  age: number;
} // type 정의 방식과 다름 주의

interface IPerson {
  gender: string;
} // 위에 선언한 인터페이스에 자동 병합됨

const user: IPerson = { name: "Jane", age: 22 };

// interface IPerson {
//   gender: string;
// } // 선언 위치 상관 없이 병합되어 타입 지정

interface IWorker {
  company: string;
  position: string;
}

// & (and) 연산자
const employee: IPerson & IWorker = {
  name: "Kim",
  age: 33,
  company: "Google",
  position: "Manager",
};

// | (or) 연산자
const employee: IPerson | IWorker = {
  name: "Kim",
  age: 33,
};

const employee: IPerson | IWorker = {
  name: "Kim",
  position: "Manager",
}; // 이게 가능하려면 각각 타입에서 age, company를 optional(?)로 처리
```

## type vs interface

1. 선언 방식의 차이
   - type: 할당 연산자
   - interface: {} 안에 정의
2. interface는 객체만 정의 가능
3. 중복 정의 시 자동병합 여부
   - type: 중복 정의시 에러남. 병합하고 싶으면 확장 문법(&) 쓰면됨.
   - interface: 이름이 같을 경우 자동으로 병합됨. 컴파일러가 병합을 한 후 타입을 지정하기 때문에 선언하는 위치와는 상관이 없음.

## 주의할 케이스

```ts
type Tuser = {
  name: string;
  age: number;
  // gender:"male"|"female"
  gender: "male" | "female" | string; // 따라서 string 타입 추가해줘야
};

const user = {
  name: "Jane",
  age: 10,
  gender: "male", // 타입이 string로 자동 추론됨
};

const user2: Tuser = user;
```

## extends 키워드

- extends로 interface 확장
- ','로 여러개 확장 가능 (type도 '&'로 여러개 확장 가능)

```ts
interface IUser {
  name: string;
  age: number;
}

interface IWorker {
  company: string;
  position: string;
}

interface IUserAddress extends TUser, IWorker {
  zipcode: string;
  address: string;
}

// type TUserAddress = IUser &
// IWorker & {
//   zipcode: string;
//   address: string;
// }

const user: IUserAddress = {
  name: "Jack",
  age: 32,
  zipcode: "12345",
  address: "Seul",
};
```

## 중복선언 피하는 방법

- [] 문법
- Pick 내장 유틸리티
- Omit 내장 유틸리티

```ts
interface SignupUser {
  name: string;
  age: number;
  gender: string;
  address: string;
}

// interface IUser {
//   name: string;
//   age: number;
// }

// 방법 1
interface IUSer {
  name: SignupUser["name"];
  age: SignupUser["age"];
}

// 방법 2
// Pick 내장 유틸리티
interface IUSer extends Pick<SignupUser, "name" | "age"> {}
type TUser = Pick<SignupUser, "name" | "age">;

// 방법 3
// Omit 내장 유틸리티
interface IUSer extends Omit<SignupUser, "gender" | "address"> {}
type TUser = Omit<SignupUser, "gender" | "address">;
```
