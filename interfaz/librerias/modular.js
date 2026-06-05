const Modular = {

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
  }

};
