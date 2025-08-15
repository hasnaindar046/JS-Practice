function checkevenodd(){
    let num=prompt("Enter number");
    num= Number(num);
    if (num % 2 == 0) {
        console.log("Even")
    }
    else{
        console.log("Odd")
    }
}
checkevenodd();