import React from 'react';
import Currencies from './Currencies';

const Table = ({currencies,search}) => {
  return (
    <table className='w-full overflow-hidden dark:rounded-lg dark:bg-white dark:text-black '>
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
        {currencies
        .filter(currency => currency.name.toLowerCase().includes(search))
        .map((currency)=>{
            return(
            <Currencies {...currency} key={currency.market_cap_rank} />
            )
        })}
        </tbody>

    </table>
  )
}

export default Table