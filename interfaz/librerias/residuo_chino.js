const ResiduoChino = {

  inverso(a, m) {

    let r0 = m;
    let r1 = a;

    let t0 = 0;
    let t1 = 1;

    while (r1 !== 0) {

      let q = Math.floor(r0 / r1);

      let r2 = r0 - q * r1;
      r0 = r1;
      r1 = r2;

      let t2 = t0 - q * t1;
      t0 = t1;
      t1 = t2;
    }

    if (r0 !== 1)
      return -1;

    if (t0 < 0)
      t0 += m;

    return t0;
  },

  trc3(a1,m1,a2,m2,a3,m3){

    let m = m1*m2*m3;

    let M1 = m/m1;
    let M2 = m/m2;
    let M3 = m/m3;

    let Y1 = this.inverso(M1 % m1,m1);
    let Y2 = this.inverso(M2 % m2,m2);
    let Y3 = this.inverso(M3 % m3,m3);

    let x =
      a1*M1*Y1 +
      a2*M2*Y2 +
      a3*M3*Y3;

    x = x % m;

    if(x < 0)
      x += m;

    return x;
  }
};
