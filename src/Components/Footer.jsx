import React from 'react';
import {InstagramOutlined,TwitterOutlined,PinterestOutlined,FacebookFilled,LinkedinFilled } from "@ant-design/icons";

const Footer = () => {

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#191919', height: '100%', color: '#fff', fontFamily: "acumin-pro-wide, Acumin Pro Wide,Helvetica NeueHelvetica,Arial,sans-serif", flexflow: 'row wrap' }}>
        <div style={{ display: 'flex', gap: '10px' }} className='main-footer-container'>
          <div>
            <h2 style={{ fontSize:'40px', paddingLeft:'45px'}} className='footer-header'>Behance</h2>
          </div>     
      <div className='footer-container' style={{ display:'flex', justifyContent: 'space-around' , fontSize:'18px',marginLeft:'45px', marginRight:'45px',flexWrap:'wrap', flexBasis:'100%'}}>
        <div>
          <h4>Build for Creatives</h4>
          <ul style={{ listStyleType:'none', padding:0, margin:0 , paddingTop:'10px', fontWeight:'500', fontSize:'17px'}}>
            <li style={{ marginBottom:'15px' }}>Try Behance Pro</li>
            <li style={{ marginBottom:'15px' }}>Find Inspiration</li>
            <li style={{ marginBottom:'15px' }}>Get Hired</li>
            <li style={{ marginBottom:'15px' }}>Sell Creative Assests</li>
            <li style={{ marginBottom:'15px' }}>Sell Freelance Services</li>
          </ul>
        </div>
      <div>
          <h4>Find Talent</h4>
          <ul style={{ listStyleType:'none', padding:0, margin:0, paddingTop:'10px', fontSize:'17px', fontWeight:'500' }}>
            <li style={{ marginBottom:'15px' }}>Post a Job</li>
            <li style={{ marginBottom:'15px' }}>Graphic Designers</li>
            <li style={{ marginBottom:'15px' }}>Photographers</li>
            <li style={{ marginBottom:'15px' }}>Video Editors</li>
            <li style={{ marginBottom:'15px' }}>Web Designers</li>
            <li style={{ marginBottom:'15px' }}>Illustrators</li>
          </ul>
      </div>
      <div>
        <h4>Behance</h4>
        <ul style={{ listStyleType:'none', padding:'5px', margin:0 , paddingTop:'10px', fontSize:'17px', fontWeight:'500'}}>
            <li style={{ marginBottom:'12px' }}>About Behance</li>
            <li style={{ marginBottom:'12px' }}>Adobe Portfolio</li>
            <li style={{ marginBottom:'12px' }}>Dowload the App</li>
            <li style={{ marginBottom:'12px' }}>Blog</li>
            <li style={{ marginBottom:'12px' }}>Careers</li>
            <li style={{ marginBottom:'12px' }}>Help Center</li>
            <li style={{ marginBottom:'12px' }}>Contact Us</li>
        </ul>
      </div>
      <div>
      <h4>Social</h4>
        <ul style={{ listStyleType:'none', padding:0, margin:0 ,paddingTop:'10px',fontSize:'17px', fontWeight:'500'}}>
            <li style={{ marginBottom:'12px' }}><InstagramOutlined />&nbsp;&nbsp;Instagram</li>
            <li style={{ marginBottom:'12px' }}><TwitterOutlined />&nbsp;&nbsp;Twitter</li>
            <li style={{ marginBottom:'12px' }}> <PinterestOutlined />&nbsp;&nbsp;Pinterest</li>
            <li style={{ marginBottom:'12px' }}><FacebookFilled />&nbsp;&nbsp;Facebook</li>
            <li style={{ marginBottom:'12px' }}><LinkedinFilled />&nbsp;&nbsp;LinkedIn</li>
        </ul>
      </div> 
          </div>
      </div>
          
    <div className='main-footer-container-down' style={{  display:'flex',marginTop:'70px', width:'auto',flexWrap:'wrap',marginLeft:'45px', marginRight:'45px', borderTop: '1px solid #fff',paddingBottom:'15px'}}>
      <div className='footer-up-container' style={{ display:'flex',gap:'40px' ,width:'35%', alignItems:'center',paddingTop:'10px'}}>
      <h3>Adobe</h3>
      <p style={{ fontSize:'14px' , fontWeight:'bold'}}>&copy; 2024 Adove Inc. All rights reserved.</p>
      </div>
        <div className = 'footer-container-2' style={{ display:'flex', justifyContent:'space-between', width:'65%', fontWeight:'bold', alignItems:'center',paddingTop:'10px' , flexWrap:'wrap'}}>
        <span  style={{ fontSize:'14px' }}>English</span>
        <span  style={{ fontSize:'14px'}}>TOU</span>
        <span  style={{ fontSize:'14px'}}>Privacy</span>
        <span  style={{ fontSize:'14px'}}>Community</span>
        <span  style={{ fontSize:'14px'}}>Cookie Preferences</span>
        <span  style={{ fontSize:'14px'}}>Do not sell or share my personal information</span>
        </div>
    </div>
    </div>
    </>
    
  )
}

export default Footer;
