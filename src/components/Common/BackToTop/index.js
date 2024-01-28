import { ArrowUpwardRounded } from '@mui/icons-material'
import React from 'react'
import "./styles.css"

const BackToTop = () => {

    let mybutton = document.getElementById("muBtn");

    window.onscroll = function(){
        scrollFunction();
    }

    function scrollFunction(){
        if(mybutton){
            if((document.body.scrollTop > 300 || document.documentElement.scrollTop>300) ){
                mybutton.style.display = "flex";
             }else{
                mybutton.style.display = "none"
             }
        }
       
    }

    function topFunction(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

  return (
    <div className='back-to-top-btn' id="myBtn" onClick={()=> topFunction()}>
         <ArrowUpwardRounded style={{color:"var(--blue)"}}/>
    </div>
  )
}

export default BackToTop