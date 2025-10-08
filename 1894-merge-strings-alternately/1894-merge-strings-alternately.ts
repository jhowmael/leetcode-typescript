function mergeAlternately(word1: string, word2: string): string {
    let merged: string[] = [];
    let i = 0;
    let j = 0;

    while (i < word1.length && j < word2.length) {
        merged.push(word1[i]);
        merged.push(word2[j]);
        i++;
        j++;
    }

    if (i < word1.length) merged.push(word1.slice(i));
    if (j < word2.length) merged.push(word2.slice(j));

    return merged.join('');
}
