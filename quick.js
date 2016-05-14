var partition = function(arr, left, right) {
    var pivot = Math.floor(  (left + right) / 2  );
    while(left <= right){
        while(arr[left] < arr[pivot]) left++;
        while(arr[right] > arr[pivot]) right--;
        if(left <= right){
            arr[left] = [arr[right], arr[right] = arr[left] ][0];
            left++;
            right--;
        }
    }
    return left;
};
var quick = function(arr, left, right) {
    left = left || 0;
    right = right || arr.length - 1;
    var index = partition(arr, left, right);
    if (left < index -1){
        quick(arr, left, index -1);
    }
    if (index < right){
        quick(arr, index, right);
    }
    return arr; //sorts in place
};

module.exports = quick;
