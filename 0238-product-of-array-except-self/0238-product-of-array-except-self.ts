// MEU CÓDIGO:
// function productExceptSelf(nums: number[]): number[] {
//     const newArray: number[] = [];

//       for(let i = 0;  i < nums.length; i++){
//         let teste: number[] = [...nums]; 
//         teste.splice(i, 1);
//         let totalProduct = teste.reduce((acc, num) => acc * num, 1);

//         newArray[i] = totalProduct;
//     }

//     return newArray
// };

// console.log([1,2,3,4])
// console.log([-1,1,0,-3,3])

//CODIGO IA
function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const answer = new Array(n).fill(1);

    let prefix = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = prefix;
        prefix *= nums[i];
    }

    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= suffix;
        suffix *= nums[i];
    }

    return answer;
}


console.log([1,2,3,4])
console.log([-1,1,0,-3,3])