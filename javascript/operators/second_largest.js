var num1=10;
var num2=20;
var num3=30;
if((num1>num2) &(num1>num3)){
    if(num2>num3){
        console.log(num2+" Second largest");
    } else{
        console.log(num3+" Second largest");
    }
}else if((num1<num2) &(num3<num2)){
    if(num1>num3){
        console.log(num1+" Second largest");
    } else{
        console.log(num3+" Second largest");
    }
} 
else if((num1<num3) &(num3>num2)){
    if(num2>num1){
        console.log(num2+" Second largest");
    } else{
        console.log(num1+" Second largest");
    }
}else{
    console.log("num1=num2=num3")
}