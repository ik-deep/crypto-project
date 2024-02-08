import React,{useEffect, useState} from 'react'
import Header from '../components/Common/Header'
import TabsComponent from '../components/Dashboard/Tabs'
import Search from '../components/Dashboard/Search'
import PaginationComponent from '../components/Pagination'
import Loader from '../components/Common/Loader'
import BackToTop from '../components/Common/BackToTop'
import { get100Coins } from '../functions/get100Coins'

const DashboardPage = () => {
  const [coins,setCoins] = useState('');
  const [search,setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true)
  const [paginatedCoins, SetPaginatedCoins] = useState([]);
  const [page, setPage] = useState(1);
 

  useEffect(() => {
     getData();
  }, [])

  const getData =async () =>{
    setIsLoading(true)
    const myCoins =await get100Coins()
    // console.log(myCoins)
    if(myCoins){
      setCoins(myCoins);
      SetPaginatedCoins(myCoins.slice(0, 10));
      setIsLoading(false)
    }
 
  }

  const handlePageChange = (even, value) =>{
    setPage(value);
    var previusIndex  = (value - 1) * 10;
   SetPaginatedCoins(coins.slice(previusIndex,previusIndex + 10));
 }

 const onSearchChange = (e) =>{
   setSearch(e.target.value); 
 }
// console.log(coins);
 var filteredCoin = coins && coins.filter(
   (item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.symbol.toLowerCase().includes(search.toLowerCase())
   )


  return (
    
    <div>
      <Header/>
      {isLoading?(<Loader/>):
      (<>
        <BackToTop/>
      <Search search={search} onSearchChange={onSearchChange}/>
      <TabsComponent coins={search?filteredCoin:paginatedCoins}/>
      {!search && <PaginationComponent page={page} handlePageChange={handlePageChange}/>}
      </>
      )}
      </div>
  )
}

export default DashboardPage