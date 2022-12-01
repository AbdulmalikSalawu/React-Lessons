import React from 'react'
import {Link, Outlet} from 'react-router-dom'

function Products() {
  return (
    <>
        <div>
            <input type='search' placeholder='Search products' />
        </div>
        {/* relative links don't start with / and will inherit the closest route to which they're rendered */}
        <nav>
            <Link to='featured'>Featured</Link>
            <Link to='new'>New</Link>
        </nav>
        <Outlet />
    </>
  )
}

export default Products