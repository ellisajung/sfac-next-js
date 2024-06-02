# 유틸리티 함수

1. Partial

- 모든 속성을 optional로 만들어주는 유틸리티 타입

```ts
type TPerson = {
  name: string;
  age: number;
  address: string;
};

const person1: Partial<TPerson> = {
  name: "Jack",
  address: "New York",
};
```

2. Required

- 모든 속성을 필수로 만들어주는 유틸리티 타입

```ts
type TCar = {
  make?: string;
  model?: string;
  year?: number;
};

const car1: Required<TCar> = {
  make: "Toyota",
  model: "Corolla",
  year: 2015,
};
```

3. Pick

- 특정 속성만 선택하여 타입을 만들어주는 유틸리티 타입

```ts
type TUser = Pick<TPerson, "name">;
```

4. Omit

- 특정 속성을 제외한 타입을 만들어주는 유틸리티 타입

```ts
type TUsername = Omit<TPerson, "address">;
```

5. Record

- 속성을 다른 타입으로 매핑한 타입ㅇㄹ 만들어주는 유틸리티 타입

```ts
const person2: Record<string, string | number> = {
  name: "Jack",
  age: 32,
  address: "New York",
};
```
