// kono ekta word string er majhe ache kina amora amora kivabe check kori == indexOf or includes diye
// kono ekta string er first word ki diye start hoiche seta o chaile amora check korte pari == startsWith  diye

const products = [
    'lanova 20gb hard dish laptop' ,
    'phone laptop 30gb laptop' ,
    'phone pro max phone',
    'macbox pro 2tera byte phone laptop'
];
const stringSearch = 'phone' ;
const output = [] ;
// for(const product of products){
//     if(product.indexOf(stringSearch)!=-1){
//         output.push(product) ;
//     }
// }

// for(const product of products){
//     if(product.includes(stringSearch)!=-1){
//         output.push(product) ;
//     }
// }

for(const product of products){
    if(product.toLowerCase().startsWith(stringSearch.toLowerCase())){
        output.push(product) ;
    }
}

console.log(output) ;