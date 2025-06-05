function RemoveDuplicateFromSortedArray(nums){
    if(nums.length === 0) return 0;

    let uniqueElement=1;

    for(let i=1;i<nums.length;i++){
        if(nums[i]!==nums[i-1]){
            nums[uniqueElement] = nums[i]
            uniqueElement++;
        }
    }
    let k=uniqueElement;
    while(k<nums.length){
        nums[k++]="_";
    }
    return uniqueElement;
}

console.log(RemoveDuplicateFromSortedArray([0, 0, 3, 3, 5, 6]))