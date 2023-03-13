import axios from "axios";
import React from "react";




const preuba = () => {



  async function funsion() {
    const pete = await axios.post('http://localhost:3001/market/subscription')
    window.location.href = pete.data.init_point  }

  return(

    <>
    <div>
      <button onClick={funsion}>Comprar membresia</button>
    </div>
    </>
  )


}  

export default preuba