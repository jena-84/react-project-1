import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context'


  const Submenu = () => {
    const {
      isSubmenuOpen,
      page: { page, links },
      location,
    } = useGlobalContext()
  //console.log(page)
  const container = useRef(null)
  // use effect runs every time when location value changes
  useEffect(()=>{
    // get the node
     const submenu = container.current;
     const {center,bottom} = location; 
     // set the position of the node (submenu)
     submenu.style.left = `${center}px`;
     submenu.style.top = `${bottom}px`;
  },[location,page,links])

  return (
    <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`} ref={container}>
      <section>
      <h4>{page.page}</h4>
      <div className= {`submenu-center col-2`}>
        {links.map((link,key)=>{
          const {label,url,icon}= link;
          return( 
          <a key={key} href={url}>{icon} {label}</a>
        )})}
      </div>
      </section>
    </aside>
    )
}

export default Submenu
