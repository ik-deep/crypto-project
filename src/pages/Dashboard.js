import React,{useEffect, useState} from 'react'
import Header from '../components/Common/Header'
import TabsComponent from '../components/Dashboard/Tabs'
import axios from 'axios'
import Search from '../components/Dashboard/Search'
import PaginationComponent from '../components/Pagination'
import Loader from '../components/Common/Loader'
import BackToTop from '../components/Common/BackToTop'

const DashboardPage = () => {
  const [coins,setCoins] = useState('');
  const [search,setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true)
  const [paginatedCoins, SetPaginatedCoins] = useState([]);
  const [page, setPage] = useState(1);
 

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
    .then((response)=>{
      console.log(response);
      setCoins(response.data);
      SetPaginatedCoins(coins.slice(0, 10));
      setIsLoading(false)
    })
    .catch((error)=>{
      console.log("Error:",error);
      setIsLoading(false)
    })
  }, [isLoading])

  const handlePageChange = (even, value) =>{
    setPage(value);
    var previusIndex  = (value - 1) * 10;
   SetPaginatedCoins(coins.slice(previusIndex,previusIndex + 10));
 }

 const onSearchChange = (e) =>{
   setSearch(e.target.value); 
   
 }

 var filteredCoin = coins && coins.filter(
   (item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.symbol.toLowerCase().includes(search.toLowerCase())

   )


  return (
    <div>
      {isLoading?(<Loader/>):
      (  <div>
      <Header/>
      <BackToTop/>
      <Search search={search} onSearchChange={onSearchChange}/>
      <TabsComponent coins={search?filteredCoin:paginatedCoins}/>
      {!search &&    <PaginationComponent page={page} handlePageChange={handlePageChange}/>}
  
      </div>)}
      </div>
  )
}

export default DashboardPage