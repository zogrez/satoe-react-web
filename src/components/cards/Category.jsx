import React from 'react';

export default function Category(props) {
  return (
    <div className='text-center w-40  shadow-sm rounded-sm mx-4 flex flex-col hover:shadow-md cursor-pointer'>
      <img
        className='w-full h-full object-cover object-center'
        src={props.image}
        alt=''
      />
      <div className='py-4 '>
        <p className='text-sm font-bold text-[#949494]'>{props.name}</p>
      </div>
    </div>
  );
}