 function innerElementPrice(elementId){
    const innerPrice= document.getElementById(elementId)
     const innerPriceString= innerPrice.innerText;
     const innerPriceValue = parseFloat(innerPriceString);
      return innerPriceValue;
 }

   

 function setElementValu(element,newValue){
    const  innerPrice=document.getElementById(element)
    innerPrice.innerText = newValue;
 }


document.getElementById('btn').addEventListener('click',function(){
    const inputField = document.getElementById('input-field')
    const inputFieldValue = inputField.value;
    const price =  innerElementPrice('price')
//   const payment =innerElementPrice('payment')
  
   

    if( inputFieldValue === 'DISCO30' ){
       const newPrice = (price - 360);
      setElementValu('payment', newPrice )


    }
})