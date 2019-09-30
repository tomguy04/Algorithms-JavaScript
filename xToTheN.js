// Write a recursive function power(x, n) that returns the value of x^n.
// (assume that n is an integer)
function power(x,n){ 
    if(n===0) return 1;

    if(n%2>0){ //n is odd, need to break down to even times X.
        return (power(x,n-1) * x);
    }

    if(n<0){
        return(1/(power(x,(n*-1))));
    }
    return(power(x,(n/2))*power(x,n/2));
}

// console.log(power(2,1));
// console.log(power(2,2));
console.log(power(2,3));
console.log(power(3,-1));