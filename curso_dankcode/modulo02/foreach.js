var arr = ['guilherme','felipe','joao'];

/*
for(var i = 0; i < arr.length;i++){
    console.log(arr[i])
}
*/

arr.forEach(function(value,index){
    console.log(index,value);
})