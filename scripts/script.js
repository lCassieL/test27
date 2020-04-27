let promise = new Promise(function(resolve, reject){
    setTimeout(() => console.log(resolve('done')), 1000);
});