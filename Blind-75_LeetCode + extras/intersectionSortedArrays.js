function intersectionArray(nums1, nums2) {
    let i=0;
    let j=0;
    let arr=[];
    if(nums1.length ===0 || nums2.length ===0){
        return 0;
    }
    else{
        while(i<nums1.length && j<nums2.length){
            if(nums1[i]===nums2[j]){
                if (arr.length === 0 || arr[arr.length - 1] !== nums1[i])
                    arr.push(nums1[i]);
                i++;
                j++;
            }
            else{
                if(nums1[i]>nums2[j])
                    j++;

                if(nums1[i]<nums2[j])
                    i++;
            }
        }
    }
    return arr;
}

console.log(intersectionArray([1, 2, 2, 3], [2, 2, 2]))
