import { useMemo, useState } from "react"
import {initialItems} from 

const App = () => {
  const [items]=useState(initialItems)
  const selectItems = useMemo(()=>items.find((item)=>item.selected), [])

  return (
    <> 
    <h1>count : {count}</h1> 
    <button onClick={()=>setCount((prevCount)=>prevCount+1)}>증가</button>
    <div>App</div>
    </>
  )
}

export default App