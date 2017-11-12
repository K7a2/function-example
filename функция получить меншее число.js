function getLesser (a,b){
if (a<b){
 return a ;
}else if (a == b) {
return ('equal');
}else
return b;
}
alert(getLesser(1,1)); 

/*вариант в ? 
function getLesser (a,b){
return a<b ? a :b;
}
alert(getLesser(1,3)); 
*/