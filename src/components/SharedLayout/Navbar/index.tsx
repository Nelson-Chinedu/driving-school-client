import React, { FunctionComponent, useState } from 'react';
import '../../../../assets/style.css';
import Input from '../../MainLayout/Input';

const Navigation: FunctionComponent<{}> = () => {
  const [ isExpanded, toggleExpansion ] = useState(false);
  return(
    <div>
      <nav className="flex items-center justify-between flex-wrap  p-6">
      <div className="flex items-center flex-shrink-0 text-black mr-6" aria-label="logos">
        <span className="font-semibold text-xl tracking-tight" aria-label="logo">DrivingNg</span>
      </div>
      <div className="block lg:hidden">
        <button onClick={() => toggleExpansion(!isExpanded)} 
          className="flex items-center px-3 py-2 border rounded
            text-blue-200 border-blue-400 hover:text-red outline-none"
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
        </button>
      </div>
      <div className={`${ isExpanded ? `block` : `hidden` } 
        w-full block  lg:flex lg:items-center lg:w-auto`}
      >
        <div className="c-Navbar-items text-sm lg:flex-grow">
          <Input 
            type="search" 
            placeholder="Enter search"
            className="py-2 px-6"
          />
        </div>
      </div>
    </nav> 
    </div>
  )
}

export default Navigation;
