function megaFriend(friends){
    if(Array.isArray(friends)==true){
        return 'it is array' ;
    }
    let mega = friends[0];
    // let mega1 = [0]; eta dile o kaj hobe
    for(const friend of friends){
        if(mega.length<friend.length){
            mega = friend ;
        }
    }
    return mega ;
}
const friends = ['asia' , 'rasdsfsfj' , 'sultana' , 'samratss'] ;
const megafriend = megaFriend(friends) ;
console.log(megafriend) ;