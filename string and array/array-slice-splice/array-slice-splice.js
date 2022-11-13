const x = [ 1, 5, 6 , 33 , 21 , 9 , 77] ;

// Note : 1. slice korle previous array change hoina
// Note : 2. splice korle previous array change hoye jai and splice kora part remove houe jai 

// const y = x.slice(4,7);
// console.log(y) ;
// const y = x.slice(2);
// console.log(y) ;

// splice array to remove elements from array
// // Note : 1. first parameter define where to start.. 
// 2. second parameter defines how many elements have to remove 
// 3. then rest of the parameter diye elements add/inject kora hoi  
// const y = x.splice(first,second,third,fourt.... ); 

// const y = x.splice(2,6); 
// console.log(y) ;  // remove kora part dekhai
// console.log(x); //x array change hoye geche splice kore .. ekhane splice kore x er kichu number remove kora hoyeche 

const y = x.splice(2,6,33,44,55); 
console.log(y) ;  
console.log(x);             