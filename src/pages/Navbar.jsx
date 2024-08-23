import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
    <div className="border-b py-4 px-28 flex justify-between">
      <Link className='font-semibold text-lg ' to='/'>API's and UseEffect</Link>
        
        <div className="flex gap-4">
          <Link to='/'>Home</Link>
          <Link to='/details'>Details</Link>
        </div>

        
      </div>
    </>
  )
}

export default Navbar
