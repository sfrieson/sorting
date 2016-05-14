var merge = function(arr) {
    var a, b;
    if (arr.length > 1){ //base case
        var mid = Math.floor(arr.length/2);
        a = merge(arr.slice(0, mid));
        b = merge(arr.slice(mid));
    } else return arr;

    var merged = [];
    var i = 0, k = 0;
    while(i < a.length || k < b.length){
        if(a.length === i) {
            merged = merged.concat(b.slice(k));
            k = b.length;
            break;
        }
        if(b.length === k) {
            merged = merged.concat(a.slice(i));
            i = a.length;
            break;
        }

        if(a[i] < b[k]) merged.push(a[i++]);
        else merged.push(b[k++]);
    }
    return merged;
};

module.exports = merge;
