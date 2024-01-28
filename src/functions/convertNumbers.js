export const convertNumbers = (number)=>{
   const numberWithCommas = number.toLocaleString();
   var arr = numberWithCommas.split(",");
   var numLength = arr.length;
   if(numLength===5){
    return arr[0]+"."+arr[1].slice(0,2)+"T";
   }else if(numLength===4){
    return arr[0]+"."+arr[1].slice(0,2)+"B";
   }else if(numLength===3){
    return arr[0]+"."+arr[1].slice(0,2)+"M";
   }else if(numLength===2){
    return arr[0]+"."+arr[1].slice(0,2)+"K";
   }else {
    return numberWithCommas;
   }
}