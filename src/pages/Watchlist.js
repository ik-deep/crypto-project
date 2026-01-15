import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import TabsComponent from "../components/Dashboard/Tabs";
import Search from "../components/Dashboard/Search";
import PaginationComponent from "../components/Pagination";
import Loader from "../components/Common/Loader";
import BackToTop from "../components/Common/BackToTop";
import { get100Coins } from "../functions/get100Coins";
import { useNavigate } from "react-router-dom";

const WatchlistPage = () => {
  const [coins, setCoins] = useState("");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [paginatedCoins, SetPaginatedCoins] = useState([]);
  const [page, setPage] = useState(1);
  const [serverError, setServerError] = useState(false);
  const navigate = useNavigate();
  let watchedCoins = JSON.parse(localStorage.getItem("watchData"));
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    try {
      const myCoins = await get100Coins();
      if (myCoins) {
        let watchListData = myCoins.filter((item) => {
          return watchedCoins && watchedCoins.indexOf(item.id) !== -1;
        });
        setCoins(watchListData);
        SetPaginatedCoins(watchListData.slice(0, 10));
        setIsLoading(false);
      }
    } catch (error) {
      if (error.message === 'SERVER_DOWN') {
        setServerError(true);
        setTimeout(() => navigate('/'), 3000);
      }
      setIsLoading(false);
    }
  };

  // const handlePageChange = (even, value) => {
  //   setPage(value);
  //   var previusIndex = (value - 1) * 10;
  //   SetPaginatedCoins(coins.slice(previusIndex, previusIndex + 10));
  // };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };
  // console.log(coins);
  var filteredCoin =
    coins &&
    coins.filter(
      (item) =>
        (item.name && item.name.toLowerCase().includes(search.toLowerCase())) ||
        (item.symbol && item.symbol.toLowerCase().includes(search.toLowerCase()))
    );

  return (
    <div>
      <Header />
      {serverError ? (
        <div style={{textAlign: 'center', padding: '50px'}}>
          <h2>Server is down. Redirecting to home...</h2>
        </div>
      ) : isLoading ? (
        <Loader />
      ) : !watchedCoins || watchedCoins.length == 0 ? (
        <h1 className="no-data-found">No item in the WatchList!</h1>
      ) : (
        <div>
          <BackToTop />
          <Search search={search} onSearchChange={onSearchChange} />

          <TabsComponent coins={search ? filteredCoin : paginatedCoins} />
        </div>
      )}
    </div>
  );
};

export default WatchlistPage;
