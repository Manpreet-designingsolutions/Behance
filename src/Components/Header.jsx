import React from 'react';
import { SearchOutlined,FileImageOutlined } from '@ant-design/icons';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import {Button} from 'antd';

const Header = () => {
  return (
    <div style={{ display:'flex', gap:'10px' , marginTop:'15px'}} className='header-container'>
      {/* filter button */}
        <Button shape="round" icon={<TuneOutlinedIcon />} style={{ padding:'22px' , fontSize:'17px', fontWeight:'bold', marginLeft:'1.5%'}} className='filter-button'>
            Filter
        </Button>
        {/* for search input */}
        <div className='search-container' style={{ Width:'900px' , fontSize:'18px', fontWeight:'bold', backgroundColor:'#F5F5F5', display:'flex', justifyContent:'space-between', marginLeft:'5px', borderRadius:'25px', border:'1px solid lightgrey '}}>
        <SearchOutlined style={{ paddingLeft:'10px' }} />
        <input  type="text"  placeholder='Search the creative world at work' style={{ border:'none', textAlign:'left' ,background:'none', marginLeft:'10px', width:'100%', fontSize:'18px',fontWeight:'bold', outline:'none'}}/>
        <Button  className='image-container'  shape='round' style={{ fontWeight:'bold', marginRight:'7px', padding:'18px',marginTop:'3px' }}><FileImageOutlined/>Search by Image</Button>
        </div>
       {/* for the recommended part */}
        <Button className='recommended-container' shape='round' style={{ marginLeft:'5px' ,padding:'22px', marginRight:'20px'}}>
         <select style={{ borderBlock:'none' , border:'none', fontWeight:'bold',fontSize:'17px'}}>
          <option value="recommended">Recommended</option>
          <option value="curated">Curated</option>
          <option value="appreciated">Most Appreciated</option>
          <option value="viewed">Most Viewed</option>
          <option value="discussed">Most Discussed</option>
          <option value="recent">Most Recent</option>
         </select>
        </Button>
        
    </div>
  )
}

export default Header;
