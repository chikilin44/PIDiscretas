const Logica = {

  not(p){
    return p ? 0 : 1;
  },

  and(p,q){
    return p && q ? 1 : 0;
  },

  or(p,q){
    return p || q ? 1 : 0;
  },

  xor(p,q){
    return (p ? 1 : 0) !== (q ? 1 : 0) ? 1 : 0;
  },

  nand(p,q){
    return this.not(this.and(p,q));
  },

  nor(p,q){
    return this.not(this.or(p,q));
  },

  implicacion(p,q){
    return (!p || q) ? 1 : 0;
  },

  bicondicional(p,q){
    return p === q ? 1 : 0;
  }

};
