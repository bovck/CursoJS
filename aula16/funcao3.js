function cabrito(n){
    if (n == 1 ){
        return 1
    } else  {
        return n * cabrito(n - 1)
    }

}

console.log(cabrito(5))