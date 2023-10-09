import React from 'react'

// container have children
function Container({children}) {
    // one line syntax for returning
  return <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>;
  
}

export default Container