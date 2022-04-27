import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Carde from './Card'
import img1 from '../style/img/photo_2022-04-15_05-41-37.jpg'
import img2 from '../style/img/photo_2022-04-15_05-42-53.jpg'
import img3 from '../style/img/photo_2022-04-15_05-42-58.jpg'
import { addDoc, collection, getDoc, getDocs } from 'firebase/firestore';
import { useEffect,useState } from 'react';
import db from '../DataBase'

const Home = () => {
  const [cat,setCat] = useState([])
  const postCollection = collection(db,"me")
  const cru = async ()=>{
    await addDoc(postCollection,{name:"mohamed",code:124,color:["red","green"],des:"jfjfj",img:'fff',price:200}).then((r)=>{console.log(r)})
  }
    useEffect(()=>{
      const getCat = async ()=>{
      const data = await getDocs(postCollection)
      setCat(data.docs.map((docs)=>({...docs.data(),id:docs.id})))


      }
      getCat()
    },[setCat,cat])
  return (
    <div>
    <button onClick={()=>{cru()}}>cru</button>
        <Container>
            <div className='center w-100 f-w'>
            {
              cat?.map((z)=>{
             
                  return(
                          <><Carde title={z.name} color={z.color} price={z.price} img={z.img} des={z.des} /> </>
                                      
                  )
                
            } )
          }

              
               </div>
            <div className='prod'></div>
        </Container>
              
  
    </div>
  )
}

export default Home