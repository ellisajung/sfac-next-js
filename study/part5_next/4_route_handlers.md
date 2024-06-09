https://nextjs.org/docs/app/building-your-application/routing/route-handlers

# 라우팅 처리 시 사용할 수 있는 훅

`http://localhost:3000/blog?lang=ko`

- 물음표 뒤 `lang=ko`를 받는 방법 (lang - 키, ko - 벨류)
- & 로 여러개 연결되어 있을수도

## 방법 1) useSearchParams - 넥스트 훅?

```tsx
"use client";
import {useSearchParams} from

const Blog =()=>{
    const searchParams = useSearchParams()
    return <></>
}

export default Blog
```

## 방법 2)

```tsx
"use client";
import {useSearchParams} from

type TPageProps = {
    params:{};
    searchParams:{
        lang:string;
        page:string;
    }
}

const BlogPage =(params:any)=>{
    console.log(params) // 서버컴포넌트이기 때문에 브라우저 콘솔에서 확인 불가능
    const {searchParams} = params
    console.log(searchParams.lang)
    console.log(searchParams.page)

    return <div><div/>
}

export default BlogPage
```
