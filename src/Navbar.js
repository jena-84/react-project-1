import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'


const Navbar = () => {

const {openSidebar,openSubmenu,closeSubmenu} = useGlobalContext();

const displayMouseOver=(e)=>{
      // get the cpage(text) of the button 
      const page = e.target.textContent
      console.log(page)
      // get the position =>(center) of the button
      const tempBtn = e.target.getBoundingClientRect()
      //console.log(tempBtn)
      //get the cinter of the button to set position of the sidemenu
      const center = (tempBtn.left + tempBtn.right)/2;
      const bottom = tempBtn.bottom - 3;
      openSubmenu(page,{center,bottom})
   }
   const handleMouseOver =(e)=>{
      if(!e.target.classList.contains('link-btn')){
        closeSubmenu()
      }
   }

  return(
     <nav className='nav' onMouseOver={handleMouseOver}>
       <div className='nav-center'>
         <div className='nav-header'>
           <img src={logo} className='nav-logo' alt='stripe'></img>
           <button className=' btn toggle-btn' onClick={openSidebar}>
            <FaBars></FaBars>
           </button>
       </div>
       <ul className='nav-links'>
            <li>
              <button className='link-btn' onMouseOver={displayMouseOver}>products</button>
            </li>
            <li>
              <button className='link-btn' onMouseOver={displayMouseOver}>developers</button>
            </li>
            <li>
              <button className='link-btn' onMouseOver={displayMouseOver}>company</button>
            </li>
       </ul>
       <button className='btn signin-btn'>sign IN</button>

     </div>

  </nav>
  )
}

export default Navbar
