import React from 'react';
import menu from '../Images/menu.png';
import { CgMenuGridR } from "react-icons/cg";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { GiBookshelf } from "react-icons/gi";
import { ImBooks } from "react-icons/im";
import { TbReport } from "react-icons/tb";
import { MdCommentBank } from "react-icons/md";
import { AiFillSchedule } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { Link } from 'react-router-dom';



const Sidebar = () => {
  return (
    <div className='side'>
      <Link to= ''><div className='bar'>
        <span><CgMenuGridR className='icon'/></span>
        <span className='text'>Menu</span>
      </div></Link>

      <Link to= '/Teachers'><div className='bar'>
        <span><FaChalkboardTeacher className='icon'/></span>
        <span className='text'>Teachers</span>
      </div></Link>

      <Link to= '/Students'><div className='bar'>
        <span><BsFillPersonFill className='icon'/></span>
        <span className='text'>Students</span>
      </div></Link>

      <Link to= '/Classes'><div className='bar'>
        <span><GiBookshelf className='icon'/></span>
        <span className='text'>Ongoing classes</span>
      </div></Link>

      <Link to= '/Courses'><div className='bar'>
        <span><ImBooks className='icon'/></span>
        <span className='text'>Courses</span>
      </div></Link>

      <Link to= ''><div className='bar'>
        <span><TbReport className='icon'/></span>
        <span className='text'>Class reports</span>
      </div></Link>

      <Link to= '/Comment'><div className='bar'>
        <span><MdCommentBank className='icon'/></span>
        <span className='text'>Comments</span>
      </div></Link>

      <Link to= '/Schedule'><div className='bar'>
        <span><AiFillSchedule className='icon'/></span>
        <span className='text'>Class schedule</span>
      </div></Link>

      <Link to= ''><div className='bar'>
        <span><AiFillSetting className='icon'/></span>
        <span className='text'>Set Up</span>
      </div></Link>

       <Link to= ''><div className='bar'>
         <span><BsFillPersonPlusFill className='icon'/></span>
         <span className='text'>Registration</span>
       </div></Link>


    
    </div>
  )
}

export default Sidebar