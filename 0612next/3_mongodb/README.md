https://mongoosejs.com/

npm i mongoose

db.ts

```ts
import mongoose from "mongoose"

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL as string)
        console.log()
    }
}
```

- 참교) 프리즈마


몽고디비 연결
스키마 생성
등록
토글
삭제