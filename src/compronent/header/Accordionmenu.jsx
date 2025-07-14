"use client";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CiLogin } from "react-icons/ci";
import { useState } from 'react';
import Link from 'next/link';


 function Accordionmenu() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className=''>
   

   <h2 className='my-6 text-center text-[23px] font-bold shadow rounded-4xl'>Shop By Category</h2>

     <div className='overflow-y-scroll h-[90%] mt-10'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
            <h4 className=' text-[20px] '>Man</h4>
          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <li className=' list-none py-2  pl-5 rounded-md text-[20px] hover:bg-gray-200 cursor-pointer'><Link href={'tshirt'}>tshirt</Link></li>
          <li className=' list-none py-2  pl-5 rounded-md text-[20px] hover:bg-gray-200 cursor-pointer'><Link href={'tshirt'}>shirt</Link></li>
          <li className=' list-none py-2  pl-5 rounded-md text-[20px] hover:bg-gray-200 cursor-pointer'><Link href={'tshirt'}>Pants</Link></li>
          <li className=' list-none py-2  pl-5 rounded-md text-[20px] hover:bg-gray-200 cursor-pointer'><Link href={'tshirt'}>Panjabi</Link></li>
          
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
            <h4 className=' text-[20px] '>Woman</h4>
          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
         <li className=' list-none py-2  pl-5 rounded-md text-[20px] hover:bg-gray-200 cursor-pointer'><Link href={'tshirt'}>share</Link></li>
          <li className=' list-none py-2  pl-5 rounded-md text-[20px] hover:bg-gray-200 cursor-pointer'><Link href={'tshirt'}>Threepiece</Link></li>
          <li className=' list-none py-2  pl-5 rounded-md text-[20px] hover:bg-gray-200 cursor-pointer'><Link href={'tshirt'}>Borka</Link></li>
          <li className=' list-none py-2  pl-5 rounded-md text-[20px] hover:bg-gray-200 cursor-pointer'><Link href={'tshirt'}>tshirt</Link></li>
          
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
            <h4 className=' text-[20px] '>Children</h4>
          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
         <li className=' list-none py-2  pl-5 rounded-md text-[20px] hover:bg-gray-200 cursor-pointer'><Link href={'tshirt'}>tshirt</Link></li>
          <li className=' list-none py-2  pl-5 rounded-md text-[20px] hover:bg-gray-200 cursor-pointer'><Link href={'tshirt'}>shirt</Link></li>
          <li className=' list-none py-2  pl-5 rounded-md text-[20px] hover:bg-gray-200 cursor-pointer'><Link href={'tshirt'}>pant</Link></li>
          <li className=' list-none py-2  pl-5 rounded-md text-[20px] hover:bg-gray-200 cursor-pointer'><Link href={'tshirt'}>borka</Link></li>
          
        
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
            <h4 className=' text-[20px] '>Beauty</h4>
          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
         <li className=' list-none py-2  pl-5 rounded-md text-[20px] hover:bg-gray-200 cursor-pointer'><Link href={'tshirt'}>tshirt</Link></li>
          <li className=' list-none py-2  pl-5 rounded-md text-[20px] hover:bg-gray-200 cursor-pointer'><Link href={'tshirt'}>shirt</Link></li>
          <li className=' list-none py-2  pl-5 rounded-md text-[20px] hover:bg-gray-200 cursor-pointer'><Link href={'tshirt'}>pant</Link></li>
          <li className=' list-none py-2  pl-5 rounded-md text-[20px] hover:bg-gray-200 cursor-pointer'><Link href={'tshirt'}>borka</Link></li>
          
        
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
            <h4 className=' text-[20px] '>Fashion</h4>
          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
         <li className=' list-none py-2  pl-5 rounded-md text-[20px] hover:bg-gray-200 cursor-pointer'><Link href={'tshirt'}>tshirt</Link></li>
          <li className=' list-none py-2  pl-5 rounded-md text-[20px] hover:bg-gray-200 cursor-pointer'><Link href={'tshirt'}>shirt</Link></li>
          <li className=' list-none py-2  pl-5 rounded-md text-[20px] hover:bg-gray-200 cursor-pointer'><Link href={'tshirt'}>pant</Link></li>
          <li className=' list-none py-2  pl-5 rounded-md text-[20px] hover:bg-gray-200 cursor-pointer'><Link href={'tshirt'}>borka</Link></li>
          
        
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
            <h4 className=' text-[20px] '>Electronics</h4>
          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
         <li className=' list-none py-2  pl-5 rounded-md text-[20px] hover:bg-gray-200 cursor-pointer'><Link href={'tshirt'}>tshirt</Link></li>
          <li className=' list-none py-2  pl-5 rounded-md text-[20px] hover:bg-gray-200 cursor-pointer'><Link href={'tshirt'}>shirt</Link></li>
          <li className=' list-none py-2  pl-5 rounded-md text-[20px] hover:bg-gray-200 cursor-pointer'><Link href={'tshirt'}>pant</Link></li>
          <li className=' list-none py-2  pl-5 rounded-md text-[20px] hover:bg-gray-200 cursor-pointer'><Link href={'tshirt'}>borka</Link></li>
          
        
        </AccordionDetails>
      </Accordion>
     </div>
     
     <div className=' flex justify-center items-center mt-6 '>
      <button className='  flex justify-center items-center gap-2 w-[150px]  py-2 border border-primary-color cursor-pointer hover:bg-gray-300 rounded-md'>
        <CiLogin  className=' text-2xl'/>
        <Link href={'/'} className=' text-[20px]'>Sing Out</Link>
        </button>
     </div>
    </div>     
  );
}

export default Accordionmenu;