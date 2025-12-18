import React from 'react'
import './Campus.css'

const Campus = () => {
  return (
    <div className='campus' id="Campus">
      <div className="gallery">
        <img src="https://images.unsplash.com/photo-1618255630366-f402c45736f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVuaXZlcnNpdHklMjBjYW1wdXN8ZW58MHx8MHx8fDA%3D" alt="" />
        <img src="https://plus.unsplash.com/premium_photo-1664299728921-02e66e6146b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5pdmVyc2l0eSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
        <img src="https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dW5pdmVyc2l0eSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
        <img src="https://plus.unsplash.com/premium_photo-1680807869624-07b389d623e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dW5pdmVyc2l0eSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
      </div>
      <button className='btn dark-btn'>See More Here <img src="https://cdn-icons-png.flaticon.com/128/545/545682.png" alt="" className='white' /> </button>
    </div>
  )
}

export default Campus
