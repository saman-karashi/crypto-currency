import React from 'react';
import {Star,ChevronDown,ChevronUp} from '../icons/icons'

const Table = ({currencies}) => {
  return (
    <table className='w-full'>
        <thead>
            <tr className='text-sm border-y'>
                <th className='text-left p-2'></th>
                <th className='text-left p-2 font-bold text-lg hidden md:block'>#</th>
                <th className='text-left w-1/2 p-2 md:w-1/3'>Name</th>
                <th className='text-left p-2'>Price</th>
                <th className='text-left p-2 whitespace-nowrap'>24h %</th>
                <th className='text-left p-2 hidden md:block'>Market Cap</th>
            </tr>
        </thead>
        <tbody>
            {currencies.map(({market_cap_rank:rank,symbol,price_change_percentage_24h,name,image,current_price:price,market_cap})=>{
            const classPercentage = price_change_percentage_24h > 0 ? 'text-green-400' : 'text-red-400' 
            const threeDigitsSeperated = market_cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

            return(
            <tr key={rank} className='border-b transition-all duration-300 hover:bg-slate-100/90 cursor-pointer'>
                <td className='px-2'>
                        <Star />
                </td>
                <td className='px-2 py-5 font-semibold hidden md:block'>{rank}</td>
                <td className='px-2 py-5 font-semibold'>
                   <div className='flex items-center'>
                        <div className='mr-2'>
                            <img alt={name} src={image} width={25} height={25} />
                        </div>
                        <span className='whitespace-nowrap'>
                            {name}
                            <span className='text-gray-400 ml-1'>{symbol.toUpperCase()}</span>
                        </span>
                   </div>
                </td>
                <td className='px-2 py-5 font-semibold'>${price}</td>
                <td className='px-2 py-5'>
                    <div className='flex items-center'>
                        <span className={`order-2 font-semibold ${classPercentage}`}>
                            {Math.abs(price_change_percentage_24h.toFixed(2))}%
                        </span>
                        <span className='order-1 mr-1'>
                            {
                                classPercentage == 'text-green-400' ?
                                <ChevronUp />
                                : 
                                <ChevronDown />
                            }
                        </span>
                    </div>
                </td>
                <td className='px-2 py-5 font-semibold hidden md:block'>${threeDigitsSeperated}</td>
            </tr>
            )
            })}
        </tbody>
    </table>
  )
}

export default Table