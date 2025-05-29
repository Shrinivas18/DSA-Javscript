/*
 Edge Case                     
---------------------------------
1. Both arrays empty            
2. One array empty (either side)
3. No overlapping elements       
4. Some overlapping elements    
5. All elements same            
6. Already unique arrays        
7. Duplicates at start/end      
8. Negative numbers and zeros   
9. Large arrays 
*/                 

function unionArrayWithoutDuplicate(nums1, nums2) {
    if( nums1.length ===0){
        let set = new Set(nums2)
        return Array.from(set);
    }
    if( nums2.length ===0){
        let set = new Set(nums1)
        return Array.from(set);
    }
    let arr=[];
    let i=0;
    let j=0;
    
    while (i< nums1.length && j<nums2.length){
        if(nums1[i]===nums2[j]){
            if (arr.length === 0 |arr[arr.length - 1] !== nums1[i])
                arr.push(nums1[i]);
            i++;
            j++;
        }
        else{
            if(nums1[i] > nums2[j] ){
                if(arr.length===0 |arr[arr.length-1]!==nums2[j])
                    arr.push(nums2[j]);
                j++;
            }
            else if(nums1[i] < nums2[j]){
                if(arr.length===0 |arr[arr.length-1]!==nums1[i])
                    arr.push(nums1[i]);
                i++;
            }
        }
        
    }
    while(i<nums1.length){
        if(arr.length===0 |arr[arr.length-1]!==nums1[i])
            arr.push(nums1[i])
        i++;
    }
    while(j<nums2.length){
        if(arr.length===0 |arr[arr.length-1]!==nums2[j])
        arr.push(nums2[j]);
        j++;
    }
    return arr;
}

console.log(unionArrayWithoutDuplicate([], [1, 1, 2]));

// console.log(unionArrayWithoutDuplicate([3, 4, 6, 7, 9, 9],[1, 5, 7, 8, 8]))