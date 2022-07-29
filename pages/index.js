import Table from "../components/Table"

export default function Home({data}) {
  return (
    <div className="container mx-auto max-w-[1200px] p-5 ">
      <Table currencies={data} />
    </div>
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
