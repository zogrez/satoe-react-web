import React from 'react';

export default function Product(props) {
  return (
    <div className='shadow-md flex-shrink-0 scroll-ml-2 px-4 w-2/12 rounded-sm float-left py-3 mx-6 text-center cursor-pointer hover:shadow-lg transition-shadow'>
      <img className='w-40 h-40 mx-auto mb-4' src={props.image} alt='' />
      <div className='text-left font-bold'>
        <h3 className='mb-3 '>{props.name}</h3>
        <div className='flex mb-4'>
          {[1, 2, 3, 4, 5].map(() => (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-4 h-4 text-[#FFC833]'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
            </svg>
          ))}
        </div>
        <h3 className='font-extrabold text-primary '>Rp. 10.000.000</h3>
        <h3 className='font-extrabold text-[#FB7181]  text-sm line-through mb-6'>
          Rp. 10.000.000
        </h3>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='w-4 h-4 text-[#949494] mr-2'
            >
              <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' />
              <circle cx='12' cy='10' r='3' />
            </svg>
            <span className='text-[#949494] text-sm'>{props.country}</span>
          </div>
          <div className='flex items-center'>
            <button className='p-1.5 '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='w-5 h-5 text-primary'
              >
                <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' />
              </svg>
            </button>
            <button className='p-1.5 bg-primary rounded-full'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className=' text-white'
              >
                <line x1='12' y1='5' x2='12' y2='19' />
                <line x1='5' y1='12' x2='19' y2='12' />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
