function isTriangle(a,b,c){
    if (a < 1 || b < 1 || c < 1) return false
    if ((a + b > c) && (a + c > b) && (b + c > a)) return true
    return false
  }