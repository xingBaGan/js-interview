let count = 1;
let friends = [];
function plusCount(){
    count++;
}
function getCount(){
    return count;
}
function getFriends(){
    return friends;
}
module.exports = {
    count,
    plusCount,
    getCount,
    friends,
    getFriends
}