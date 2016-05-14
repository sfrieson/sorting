var selection = function(arr) {
    var swap;
    for(var i = 0; i < arr.length; i++){
        swap = i;
        for (var j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[swap]) {
                swap = j;
            }
        }
        arr[i] = [arr[swap], arr[swap] = arr[i]][0];
    }
    return arr;
};


module.exports = selection;
