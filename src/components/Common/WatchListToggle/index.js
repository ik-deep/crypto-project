import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import "./styles.css"

const WatchListToggle = ({saveToWatchList}) => {
  return (
    <div>
        {saveToWatchList?(
            <StarIcon className='watchList'/>
        ):(
            <StarBorderIcon  className='watchList'/>
        )}
    </div>
  )
}

export default WatchListToggle