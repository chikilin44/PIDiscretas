const Sucesiones = {

  terminoAritmetico(a1,d,n){
    return a1 + (n-1)*d;
  },

  terminoGeometrico(a1,r,n){
    return a1 * Math.pow(r,n-1);
  },

  fibonacci(n){
    if(n===0) return 0;
    if(n===1) return 1;

    let a=0;
    let b=1;

    for(let i=2;i<=n;i++){
      let c=a+b;
      a=b;
      b=c;
    }

    return b;
  },

  sumaNaturales(n){
    return n*(n+1)/2;
  }

};
