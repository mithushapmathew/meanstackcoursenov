
var lower =10;
var upper =50;
for(let n=lower+1; n<upper; n++)
{
flag = 1;
for(var i=2; i<n; i++)
if(n%i == 0)
{
flag = 0;
break;
}
if(flag)
console.log(n);
}


