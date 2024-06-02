# 함수 선언식 vs 함수 표현식/화살표 함수

-

```ts
// 함수 선언식
function add(a: number, b: number): number {
  return a + b;
}
function minus(a: number, b: number): number {
  return a - b;
}
function multiply(a: number, b: number): number {
  return a * b;
}

// 함수 표현식
type TSumFn = (a: number, b: number) => number;
interface ISumFn {
  (a: number, b: number);
}

const addExpress: TSumFn = function (a, b) {
  return a + b;
};

const minusExpress: TSumFn = function (a, b) {
  return a - b;
};

const multiplyExpress: TSumFn = function (a, b) {
  return a * b;
};

// 화살표 함수
const addExpress: IsSumFn = (a, b) => a + b;
const minusExpress: IsSumFn = (a, b) => a - b;
const multiplyExpress: IsSumFn = (a, b) => a * b;
```

# any 타입

- 타입스크립트를 쓰는 의미가 없음...

```ts
function getSize(values: any[]) {
  return values.length;
}
```

# 제네릭 함수

- 타입을 유동적으로 받을 수 있게 해주는 문법
- any와 달리 부를 때 타입을 명시해야 한다는 차이점이 존재

## 제네릭 함수 문법

```ts
function getSize<T>(values: T[]): number {
  return values.length;
}

// getSize([1, 2, 3]);
getSize<number>([1, 2, 3]);
getSize<string>(["1", "2", "3"]);
getSize<string | number>(["1", "2", "3", 1, 2, 3]);
```

## 타입 오류 고쳐보기 1

```ts
function getSize(values) {
  return values.length;
}

getSize([1, 2, 3]);
getSize(["1", "2", "3"]);
getSize(["1", "2", "3", 1, 2, 3]);
getSize(["1", "2", "3", 1, 2, 3, true]);
```

## 타입 오류 고쳐보기 2

```ts
function getSize<T>(values: T[]): number {
  return values.length;
}

// 함수 선언식
function getSize<T>(values: T[] | T): number | "not array or string" {
  return Array.isArray(values) || typeof values === "string"
    ? values.length
    : "not array or string";
}

// 화살표 함수
type TGenericFn = <T>(values: T[] | T) => number | "not array or string";
const getSize: TGenericFn = (values) =>
  Array.isArray(values) || typeof values === "string"
    ? values.length
    : "not array or string";

getSize<number>([1, 2, 3]);
getSize<string>(["1", "2", "3"]);
getSize<string | number>(["1", "2", "3", 1, 2, 3]);
// getSize(["1", "2", "3", 1, 2, 3, true]);
getSize<string>("hello world");
```

## 타입, 인터페이스

```ts
// type
type TUser<T> = {
  name: string;
  age: number;
  likesFood: T;
};

// interface
interface TUser<T> {
  name: string;
  age: number;
  likesFood: T;
}

const person1: TUser<string[]> = {
  name: "mike",
  age: 23,
  likesFood: ["banana", "apple"],
};

const person2: TUser<null> = {
  name: "mike",
  age: 23,
  likesFood: null,
};
```
