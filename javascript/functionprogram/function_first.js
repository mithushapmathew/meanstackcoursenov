//function are used to perform a specific task

//function functionname(arg1,arg2,....,argn){
 //   fn defntn
//}

function add(num1,num2){
    let res =num1 +num2;
    console.log(res);
}

//function calling by fn name

add(10,20);
//substarction
function sub(num1,num2){
    let res =num1 -num2;
    console.log(res);
}

//function calling by fn name

sub(30,20);

//multiplications
function mul(num1,num2){
    let res =num1 *num2;
    console.log(res);
}

//function calling by fn name

mul(30,20);

//Divition
function div(num1,num2){
    let res =num1 /num2;
    console.log(res);
}

//function calling by fn name

div(10,2);

//Modulus
function modu(num1,num2){
    let res =num1 %num2;
    console.log(res);
}

//function calling by fn name

modu(10,2);

//power
function pow(num1,num2){
    let res =num1 **num2;
    console.log(res);
}

//function calling by fn name

pow(7,4);


//factorial

function factorial(num){
    let fact=1;
    for(i=1;i<=num;i++){
      fact =fact*i;

    }
    console.log(fact);
}
factorial(5);







