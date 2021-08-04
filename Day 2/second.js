//2.Print only the elements which are divisible by 5 from 1 to 50.

let n=50

console.log('\nNumbers divisible by 5 are:')

for(let i=1; i<=n;i++)
{
    if(i%5==0)
        console.log(i)
}