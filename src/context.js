import React, { useState, useContext } from 'react'
import sublinks from './data'

//Create contect 
const AppContext = React.createContext();

export const AppProvider =({children})=>{

    const [isSidebarOpen, setIsSideBarOpen]= useState(false);
    const [isSubmenuOpen, setIsSumMenuOpen] = useState(false)

    const [page, setPage]= useState({ page:'', links:[] })
    const [location,setLocation]= useState({});

    const openSidebar =()=>{
        setIsSideBarOpen(true)
    }
    const closeSidebar =()=>{
        setIsSideBarOpen(false)
    }
    const openSubmenu =(text, coordinates)=>{
        console.log(text)
        const page = sublinks.find((link) => link.page === text)
        //console.log(page.page,)
        setPage(page)
        setLocation(coordinates)
        setIsSumMenuOpen(true)
    }
    const closeSubmenu =()=>{
        setIsSumMenuOpen(false)
    }


 return(
    // use contect as provider
        <AppContext.Provider  
          value={{isSidebarOpen,
                  isSubmenuOpen,
                  openSidebar,
                  openSubmenu,
                  closeSidebar,
                  closeSubmenu,
                  page,
                   location,
                 
                }}
            >{children}
            </AppContext.Provider>
       
            
    )
}
//export is to all conponents 
export const useGlobalContext = ()=>{
    return useContext(AppContext)
} 