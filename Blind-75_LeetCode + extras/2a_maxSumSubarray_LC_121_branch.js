// Sliding Window
// Case 1 - Fixed Window Size
// TC - O(n)

function maxSumSubarray(arr,window){
    let maxSum = 0;
    let windowSum = 0;

    for(let i=0;i<window;i++){
        windowSum += arr[i];
    }

    maxSum = windowSum;

    for(let i=window ; i<arr.length;i++){
        windowSum += arr[i] - arr[i-window];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

console.log(maxSumSubarray([2,1,5,1,3,2],3));