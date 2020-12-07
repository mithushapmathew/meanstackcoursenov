var number=123;
var revNumber = 0;
  while (number > 0) {
    revNumber = (revNumber * 10) + (number % 10);
    number = Math.floor(number / 10);
  }

console.log(revNumber);

 //var data="";
//while(number!=0){
  //var digit=number%10;
  //data=data+String(digit);
 
  //number = Math.floor(number/10);
//}
// console.log(data);