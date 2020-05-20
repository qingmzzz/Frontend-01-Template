//匹配a
// function match(string){
//     let foundA = false;
//     for(let c of string){
//         if(c === 'a')
//         foundA = true;
//         else
//         return false;
//     }
//     return false;
// }
// console.log(match('I acbm groots'));
//匹配 a*b
// function match(string){
//     let foundA = false;
//     for(let c of string){
//         if(c === 'a')
//         foundA = true;
//         else if (foundA && c === 'b')
//         return true;
//     }
//     return false;
// }
// console.log(match('I acbm groots'));
//匹配 ab
// function match(string){
//     let foundA = false;
//     for(let c of string){
//         if(c === 'a')
//         foundA = true;
//         else if (foundA && c === 'b')
//         return true;
//         else
//         return false;
//     }
//     return false;
// }
// console.log(match('I acbm groots'));
//匹配abcdef
// function match(string){
//     let foundA = false;
//     let foundB = false;
//     let foundC = false;
//     let foundD = false;
//     let foundE = false;
//     for(let c of string){
//         if(c === 'a')
//         foundA = true;
//         else if (foundA && c === 'b')
//         foundB = true;
//         else if (foundB && c === 'c')
//         foundC = true;
//         else if (foundC && c === 'd')
//         foundD = true;
//         else if (foundD && c === 'e')
//         foundE = true;
//         else if (foundE && c === 'f')
//         return true;
//         else{
//             foundA = false;
//             foundB = false;
//             foundC = false;
//             foundD = false;
//             foundE = false;
//         }
//     }
//     return false;
// }
// console.log(match('I abcdef groots'));
//匹配aabc
// function match(string){
//     let state = start;
//     for(let c of string){
//         console.log(c);
//         state = state(c);
//     }
//     return state === end;
// }
// function start(c){
//     if(c === 'a')
//     return foundA;
//     else
//     return start;

// }
// function end(c){
//     return end;
// }
// function foundA(c){
//     if(c === 'b')
//     return foundB;
//     else
//     return start(c);
// }
// function foundB(c){
//     if(c === 'c')
//     return end;
//     else
//     return start(c);
// }

// console.log(match('aabc'));
function match(string) {
  let state = start;
  for (let c of string) {
    console.log(c);
    state = state(c);
  }
  return state === end;
}
function start(c) {
  if (c === 'a') return foundA;
  else return start;
}
function end(c) {
  return end;
}
function foundA(c) {
  if (c === 'b') return foundB;
  else return start(c);
}
function foundB(c) {
  if (c === 'c') return foundA2;
  else return start(c);
}
function foundA2(c) {
  if (c === 'a') return foundB2;
  else return start(c);
}
function foundB2(c) {
  if (c === 'b') return foundX;
  else return start(c);
}
function foundX(c) {
  if (c === 'x') return end;
  else if (c === 'c') return foundA2;
  else return start(c);
}

console.log(match('abcaabcabx'));
