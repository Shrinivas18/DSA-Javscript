// Sliding Window
// Case 1 - Dynamic Window Size
// TC O(n)

function maxLengthLongestSubstr(string){
    let map = new Map();
    let maxLen = 0;
    let left=0;

    for(let right=0;right<string.length;right++){
        if(map.has(string[right])){
            left = Math.max(map.get(string[right])+1 , left);
            console.log(left)
        }
        map.set(string[right],right);
        maxLen = Math.max(maxLen , right - left + 1);
    }
    
    return maxLen;
}

let str = "abcabcbb";
console.log(maxLengthLongestSubstr(str));

// Brute Force approach
// TC - O(n^2)

// function longestSubstr(s){
//     let maxCount=0;
//     for(let i=0;i<s.length;i+=maxCount){
//         let stack=[];
//         let count=0;
//         for(let k=i;k<s.length;k++){
//             if (!stack.includes(s[k]))
//                 {
//                 stack.push(s[k]);
//                 count++;
//             }
//             else{
//                 break;
//             }
//         }
//         maxCount = Math.max(maxCount,count)
//     }

//     return maxCount;
// }

// let str = "abcabcbb";
// console.log(longestSubstr(str));