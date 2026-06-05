const Booleana = {

  and(a,b){
    return a && b ? 1 : 0;
  },

  or(a,b){
    return a || b ? 1 : 0;
  },

  not(a){
    return a ? 0 : 1;
  },

  xor(a,b){
    return (a && !b) || (!a && b) ? 1 : 0;
  },

  nand(a,b){
    return this.not(this.and(a,b));
  },

  nor(a,b){
    return this.not(this.or(a,b));
  },

  xnor(a,b){
    return this.not(this.xor(a,b));
  },

  implica(a,b){
    return (!a || b) ? 1 : 0;
  },

  equivale(a,b){
    return this.xnor(a,b);
  }

};
