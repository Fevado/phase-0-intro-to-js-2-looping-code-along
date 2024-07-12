
function writeCards(names,event){
    let supMessage = []
      for (let l=0; l<names.length; l++){
        let message= `Thank you, ${names[l]}, for the wonderful ${event} gift!`
        supMessage.push(message)
      }return supMessage
}


function countDown(number){
    //let number = 10;
while (number >=0) {
  console.log(number --);
}
 }