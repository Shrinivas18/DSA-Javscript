/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let map = new Map();
    for(let i=0;i<numbers.length;i++){
        let diff = target - numbers[i];
        if(map.has(diff)){
            return [map.get(diff)+1,i+1]
        }
        map.set(numbers[i],i)
    }
    console.log(map)
    return []
};