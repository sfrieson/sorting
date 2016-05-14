function radix (arr){
    var divide = 1;
    var currentPlace = true;
    var current;
    var temp = [[],[],[],[],[],[],[],[],[],[]];
    while(currentPlace){
        currentPlace = false;
        for (var i = 0; i < arr.length; i++){
            current = Math.floor(arr[i] / divide) % 10;
            temp[current].push(arr[i]);
            if (current > 0) currentPlace = true;
        }
        arr = [].concat(temp[0],temp[1],temp[2],temp[3],temp[4],
                        temp[5],temp[6],temp[7],temp[8],temp[9]);
        temp = [[],[],[],[],[],[],[],[],[],[]];
        divide *=10;
    }

    return arr;
}


module.exports = radix;
