var isIsomorphic = function(s, t) {
    let temp = new Map();
    let temp2 = new Map();
    
   
    for(let i = 0; i < s.length; i++) {
        let c1 = s.charAt(i);
        let c2 = t.charAt(i);
        if(temp.has(c1) && temp[c1] !== c2 || temp2.has(c2) && temp2[c2] != c1 ) return false;
        temp[c1] = c2;
        temp2[c2] = c1;

    }
    return true;
}; 

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("badc","baba"));