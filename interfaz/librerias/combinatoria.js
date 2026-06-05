const Combinatoria = {

  factorial(n){
    if(n <= 1) return 1;

    let r = 1;

    for(let i = 2; i <= n; i++){
      r *= i;
    }

    return r;
  },

  permutacion(n,r){
    if(r > n) return 0;

    return this.factorial(n) /
      this.factorial(n-r);
  },

  combinacion(n,r){
    if(r > n) return 0;

    return this.factorial(n) /
      (this.factorial(r) *
        this.factorial(n-r));
  },

  combinacionRepeticion(n,r){
    return this.combinacion(n+r-1,r);
  },

  permutacionRepeticion(n,r){
    let res = 1;

    for(let i=0;i<r;i++){
      res *= n;
    }

    return res;
  }

};
