import React from 'react'
import "../../styles/main.css"
import { useNavigate } from 'react-router-dom'

export default function Bin({size = 24, color = "#d4af37"}) {
  const navigate = useNavigate();

  const handlePageBin = () => {
    navigate('/bin');
  }
   return (
    <div onClick={handlePageBin} className='bin'>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
    </div>
  )
}
