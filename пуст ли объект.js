// мой вариант , много лишнего 
 function isEmpty(obj) {
var counter = 0;
for (var key in obj){
counter++;
}
if (counter == 0){
return true 
}else if(counter !== 0){
 return false
}
}

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) );

