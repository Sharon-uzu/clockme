import React from 'react'

const AddCourse = () => {
  return (
    <div className='edit-details'>

    <label>Course</label> 
    <input type="text" placeholder='Course'/><br/>
    
    <label>Teacher</label> 
    <input type="text" placeholder='first name'/><br/>
    <input type="text" placeholder='last name'/><br/>
    <input type="text" placeholder='Class'/><br/>
    

  </div>
  )
}

export default AddCourse