import { addDoc, collection } from 'firebase/firestore'
import React,{useState} from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import db from '../../DataBase'
import AddCat from './AddCat'

const User = () => {
  const postCollection = collection(db,"me")

  const addPro = async ()=>{
    await addDoc(postCollection,{name:name,code:code,color:[color],des:des,img:img,price:price}).then((r)=>{console.log(r)})
  }
  const [name,setName] = useState()
  const [price,setprice] = useState()
  const [code,setcode] = useState()
  const [des,setdes] = useState()
  const [color,setcolor] = useState()
  const [img,setImg] = useState()

  return (
    <div>
    <Link to="/admin/addcat">add</Link>
    <Routes>
    <Route path="/addcat" element={<AddCat/>}/>

    </Routes>
       <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
       <input type="text" onChange={(e)=>{setcode(e.target.value)}}/>
       <input type="text" onChange={(e)=>{setprice(e.target.value)}}/>
       <input type="text" onChange={(e)=>{setdes(e.target.value)}}/>
       <input type="text" onChange={(e)=>{setcolor(e.target.value)}}/>
       <input type="text" onChange={(e)=>{setImg(e.target.value)}}/>
<button onClick={()=>{addPro()}}>add</button>
    
    </div>
  )
}

export default User