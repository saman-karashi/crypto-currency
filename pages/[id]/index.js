import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const index = ({currency}) => {
  return (
    <div className='card overflow-y-scroll max-h-[40rem] max-w-[20rem] rounded-lg mx-auto mt-10 shadow-lg  dark:bg-white dark:shadow-none'>
        <div className='p-2'>
           <div className='w-full'>
              <Image alt={currency.name} src={currency.image.large} width={'100%'} height={'100%'} layout="responsive" />
           </div>
           <div className='mt-3 px-2 flex items-center flex-col'>
             <h1 className='mb-3 font-semibold text-2xl text-center dark:text-black'>{currency.name}</h1>
             <Link href={currency.links.homepage[0]}>
                <a target={"_blank"} className='py-2 px-4 rounded-sm font-semibold transition-all duration-300 text-white bg-red-400 hover:opacity-90'>Explore</a>
             </Link>
            </div> 
        </div>
    </div>
  )
}

export default index


export const getStaticProps = async({params})=>{
const request = await fetch(`https://api.coingecko.com/api/v3/coins/${params.id}?tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`)

const res= await request.json()

return{
props:{
currency:res
}
}

}


export const getStaticPaths = async()=>{
const currencies = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')

const data = await currencies.json()

const paths = data.map(({id}) => ({params:{id:id.toString()}}))

return{
    paths,
    fallback:false
}
}
