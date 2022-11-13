function sortNum(num1, num2){
    let sum = 0 ;
    // console.log(arguments);
    for(const num of arguments){
        sum = sum + num ;
    }
    return sum ; 
};
const num = sortNum(10,20,22,1,3,4,4) ;
// console.log(num) ;

function FullName(first, last){
    let fullName = '' ;
    // console.log(arguments);
    for(const name of arguments){
        fullName = fullName + name + ' ';
    }
    return fullName ; 
};
const names = FullName('hanif' , 'bin' , 'johad') ;
console.log(names) ;