
let i,j;

for(j=2; j<=100; j++)
{
  let count = 0;
  for( i=1; i<=j; i++)
  {
    if(j%i==0)
    {
      count++;
    }
  
  }

  if(count==2)
  {
    console.log(j)
  }

}