function reverseWords(s: string): string {
    const arrayStrings = s.trim().split(/\s+/);
    const arrayReverse = arrayStrings.reverse();

    return arrayReverse.join(" ")
};

console.log(reverseWords("the sky is blue"))
console.log(reverseWords("  hello world  "))
console.log(reverseWords("a good   example"))
