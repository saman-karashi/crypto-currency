import SearchBox from "../components/SearchBox"
import Table from "../components/Table"
import {useState} from 'react'
import Layout from "../components/Layout";
import Head from "next/head";

export default function Home({data}) {
const [search,setSearch] = useState('');

const searchHandler =(e)=>{
setSearch(e.target.value);
}

  return (
    <>

      <SearchBox searchHandler={searchHandler} />
      <Table currencies={data} search={search.toLowerCase()} />
    </>
  )
}


export const getStaticProps = async()=>{
const currencies = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false',{
method:'GET',
headers:{
'content-type':'application/json'
}
})

const data = await currencies.json()

return{
  props:{
    data
  }
}
}
