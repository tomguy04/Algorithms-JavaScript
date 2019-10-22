function countDown(num){
    console.log(num);
    if(num >=1)
        return countDown(num-1);
}

countDown(3);