//7(1,7) ,13(1,13)

var num=8;
var flag=0;
for(let i=2;i<num;i++){
    if(num%i==0){
  flag+=1;
  break;
    } else{
        flag=0;
    }
}
if(flag>0){
    console.log("Not Prime");

} else {
    console.log("Prime");
}