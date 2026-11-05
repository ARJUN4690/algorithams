

function bubleSort(arr){
 
const a = [...arr];
const n = a.length;



 for(let i = 0; i<n-1; i++){
   let swipe = false;
   
   for(let j = 0; j< n-i-1; j++){
    if(a[j]>a[j+1]){
      [a[j], a[j+1]] = [a[j+1], a[j]];
      swipe = true;    
     }
    
   }
    if(!swipe) break;
  }
 return a;
}

console.log(bubleSort([3,2,4,6,7]));