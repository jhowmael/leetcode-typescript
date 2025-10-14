function reverseVowels(s: string) {
    let sArray: string[] = s.split('');
    let result: string[] = [];
    let right: number = sArray.length - 1;
    const vowels = ["a", "A", "e", "E","i", "I", "o", "O", "u", "U"];

    for (let i = 0; i < sArray.length; i++){
        if (vowels.includes(sArray[i])) {   
            while(right >= 0){
                if (vowels.includes(sArray[right])) {
                    result[i] = sArray[right];
                    right--;
                    break; 
                }else{
                    right--;
                }
            }
        }else{
            result[i] =  sArray[i]
        }
    }

    return result.join('');
};



