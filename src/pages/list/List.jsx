import React from 'react'
import "./list.scss"
import Navbar from '../../Components/navbar/Navbar'
import Sidebar from '../../Components/sidebars/Sidebar'
import Datatable from '../../Components/Datatabl/Datatable'

const List = () => {
  return (
    <>
    <div className='List'>
        <Sidebar />
        <div className="listContainer">
      <Navbar />
      
     <Datatable  title ="Add User" title2 ="Add new User"/>
  </div>
      
    </div>
  
  </>
  )
}

export default List
