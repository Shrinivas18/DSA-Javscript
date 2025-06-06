// Using Hashmap 
// TC - O(n)
//  arr[0] = target - arr[1]

function twoSum(nums,target){
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        let diff = target - nums[i];
        if(map.has(diff)){
            return [map.get(diff),i];
        }
        map.set(nums[i],i)
    }
    return 0;
}

let nums = [2,7,11,15];
let target = 9;
console.log(twoSum(nums,target));