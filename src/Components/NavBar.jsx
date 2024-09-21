import React, { useState } from 'react';
import {BellFilled,CloseCircleFilled ,MenuOutlined} from '@ant-design/icons';
import {Button} from 'antd';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const showSideBar=() => {
    setOpen(!open);
  }
  const closeSideBar = () => {
    setOpen(!open);
  }
  return (
    <div className='navbar-container' style={{ display:'flex', flexDirection:'row' , gap: '20px', width:'auto', height:'40px', fontSize:'16px', borderBottom:'1px solid #DCDCDC', padding:'5px'}}>
      <div style={{ display: 'flex', gap: '20px', width: '35%', alignItems: 'center', borderRight: '1px solid #DCDCDC', paddingLeft: '1%' }}>
        <MenuOutlined className='sidebar-icon' onClick={showSideBar} />
      <h3 style={{ fontWeight:'900'}}>Behance</h3>
        <select className='select-navbar'  style={{ border:'none', fontWeight:'600', borderBlock:'none', background:'none', fontSize:'16px', width:'18%'}}>
          <option value="explore"> Explore</option>
          <option value="currated">Curated Galleries</option>
        </select>
        <a style={{ fontWeight:'600',textDecoration:'none',color:'black' }} href='#'>Assests</a>
        <a style={{ fontWeight:'600',textDecoration:'none',color:'black' }} href='#'>Jobs</a>
        <a style={{ fontWeight:'600',textDecoration:'none',color:'black' }} href='#'>Behance</a>
      </div>
      <div className='side-navbar-container-1' style={{ display:'flex', width:'65%', justifyContent:'space-between', alignItems:'center' }}>
        <select className='select-navbar' shape="round" style={{ border:'none', borderBlock:'none', background:'none', width:'18%', fontWeight:'bold', fontSize:'16px' }}>
          <option value="">Hire Freelancers</option>
          <option value="">Hiring on Behance</option>
          <option value="">Hiring on Behance</option>
          <option value="">Hiring on Behance</option>
        </select>
     <div className='side-navbar-container-2' style={{ display:'flex' , gap:'10px', alignItems:'center'}}>
          <div className='bell-filled-icon' style={{ position: 'absolute', right: 0, paddingTop: 6, paddingRight:6 }}> <BellFilled /></div>
        <Button className='side-navbar-container-2'  shape="round" style={{ fontWeight:'bold', color:'#003bff', width:'80px' }} >
          Log In
        </Button>
        <Button className='side-navbar-container-2' type="primary" shape="round" style={{ fontWeight:'bold', width:'90px' }} >
          Sign Up
        </Button>
        <p className='side-navbar-container-2' style={{ fontWeight:'900' , fontSize:'13px', paddingRight:'3%'}}>Adobe</p>
        </div> 
        
      </div>  
      {/* sidebar */}
      {open && (
        <div  className='sidebar' style={{ position: 'fixed', top: 0, left: 0, height: '100vh', width: '250px', zIndex: '999', backgroundColor: 'white', boxShadow: '-10px 0 10px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'flex-start', flexDirection: 'column', justifyContent: 'flex-start', paddingLeft:'1%' , backdropFilter:'blur(10px)'}}>
            <CloseCircleFilled onClick={closeSideBar } style={{ marginTop:'15px'}} />
             
        <a style={{ fontWeight:'600', textDecoration:'none', color:'black', paddingTop:'10px' }} href='#'>Assests</a>
        <a style={{ fontWeight:'600',textDecoration:'none',color:'black', paddingTop:'15px' }} href='#'>Jobs</a>
        <a style={{ fontWeight: '600',textDecoration:'none',color:'black',paddingTop:'15px' }} href='#'>Behance</a>
        <select shape="round" style={{ border:'none', borderBlock:'none', background:'none', fontWeight:'bold', fontSize:'16px',paddingTop:'15px'}}>
          <option value="">Hire Freelancers</option>
          <option value="">Hiring on Behance</option>
          <option value="">Hiring on Behance</option>
          <option value="">Hiring on Behance</option>
        </select>
        
         <div style={{ display:'flex', justifyContent:'space-between', fontWeight:'bold', alignItems:'flex-start',paddingTop:'10px' , flexDirection:'column', marginTop:'20px'}}>
        <span  style={{ fontSize:'14px' , paddingTop:'5px'}}>English</span>
        <span  style={{ fontSize:'14px',paddingTop:'5px' }}>About</span>
        <span  style={{ fontSize:'14px' ,paddingTop:'5px' }}>Blog</span>
        <span  style={{ fontSize:'14px',paddingTop:'5px' }}>TOU</span>
        <span style={{ fontSize: '14px' ,paddingTop:'5px' }}>Privacy</span>
        <span  style={{ fontSize:'14px' ,paddingTop:'5px' }}>Help</span>
        <span  style={{ fontSize:'14px',paddingTop:'5px' }}>Community</span>
        <span  style={{ fontSize:'14px',paddingTop:'5px' }}>Do not sell or share my personal information</span>
        </div>
        <Button type="primary" shape="round" style={{ fontWeight:'bold', width:'90px', marginTop:'20%' }} >
          Sign Up
        </Button> 
      </div>
      )
      }
    </div>
  )
}

export default NavBar;
