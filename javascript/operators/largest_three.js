var num1=10;
var num2=20;
var num3=30;
if((num1>num2) &(num1>num3)){
    console.log(num1);
}else if((num1<num2) &(num3<num2)){
    console.log(num2);
} 
else if((num1<num3) &(num3>num2)){
    console.log(num3);
}else{
    console.log("num1=num2=num3")
}