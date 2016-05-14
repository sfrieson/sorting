var bubble = function(arr) {
    var swapped;

    for(var i = 0; i < arr.length; i++){
        swapped = false;
        for(var j = 0; j < arr.length; j++){
            if(arr[j] > arr[j+1]) {
                arr[j+1] = [arr[j], arr[j]=arr[j+1]][0]; //swap technique
                swapped = true;
            }
        }

        if(!swapped) break;
    }

    return arr;
};



module.exports = bubble;
