import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import { Productdata } from '@/src/data/productdata/Productdata';
import Ratings from './Ratings';

function Cards({img , name , des}) {
  return (
   <div className=' group flex'>
   
        <Card sx={{ maxWidth: 335 }} className='my-3! w-[250px] lg:w-full mx-auto shadow-lg '>
      <CardActionArea >
        <CardMedia
          component="img"
         className='h-[180px]! group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:shadow-lg'
          image={img}
          alt="green iguana"
          
        />
        <CardContent>
          <p className=' text-[12px] md:text-[14px] lg:text-[16px] mb-4'>{name}</p>
          <Typography gutterBottom variant="h5" component="div">
           <h2 className=' text-[16px] lg:text-[23px] text-wrap'>Bay the product</h2>
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            <Ratings/>
            <span className=' bg-red-400 p-2 text-black rounded-md font-medium'>30% Offer</span>
           <div className='flex justify-between items-center mt-3'>
             <span className='text-[20px] text-[#31e472] font-medium'>TK: 2000</span>
             <del className='text-[15px] text-black font-medium'>TK: 3000</del>
           </div>
          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>
      
   </div>
  );
}
export default Cards;