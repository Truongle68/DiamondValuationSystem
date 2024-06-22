import axios from 'axios'
import { url } from '../slices/api'


const PayButton = ({serviceData}) => {

  const data = {
    name: serviceData.name,
    quantity: serviceData.quantity || 1,
    price: serviceData.price
  }

  console.log(data)

  const handleBookService = async() => {
    await axios.post(`${url}/stripe/create-checkout-session`,data)
    .then((res)=>{
      if(res.data.url){
        window.location.href = res.data.url
      }
    }).catch((e)=>{
      console.log(e.message)
    })
    
  }

  return (
    <>
      <button onClick={()=>handleBookService()}>Book</button>
    </>
  )
}

export default PayButton