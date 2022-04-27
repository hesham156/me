import { Button } from 'react-bootstrap'
import React from 'react'
import { Card } from 'react-bootstrap'
import { useState } from 'react'
import { CloseButton } from 'react-bootstrap'
import { CollectionReference } from 'firebase/firestore'

const Carde = ({title,des,img,price,color,link}) => {

  const [dis,setDis] = useState(true)

  const close = () => {
      dis?setDis(false):setDis(true)
  }
  return (
    <>
    <Card style={{ width: '18rem','cursor':'pointer'}} onClick={()=>{close()}}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
     {price}
    </Card.Text>
    <Button variant="primary" >Go somewhere</Button>
  </Card.Body>
  <div style={{display:dis?'none':'flex'}} className='BigCard center'>
  <CloseButton variant="white" className='close' onClick={()=>{close()}} />
        <div className='cat-info center vh-50'>
                <div className='img'>
                    <img src={img} alt='img'/>
                </div>
                <div className='text center f-d-c'>
                    <div className='info center f-d-c'>
                        <p>{title}</p>
                        <p>{des}</p>
                    </div>
                    <div className='cls btn'>
                    {color?.map((u)=>{
                      return (
                        <button key={u} className='color' style={{background:u}}></button>

                      )
                    
                    })}
                    
                    </div>
                    <div className='btn'>
                                  <Button variant="success" onClick={()=>{alert("dd")}} > اضف للعربه</Button>
                                  <Button variant="primary" > اطلب الان</Button>
                    </div>
                </div>
        </div>
        <div className='cate vh-50 w-100'>
        </div>        

</div>
</Card>
    </>
  )
}

export default Carde