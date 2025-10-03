class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        const need = new Array(26).fill(0);
        const window = new Array(26).fill(0);

        for (let char of s1) {
        need[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        for (let i = 0; i < s1.length; i++){
            window[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        if(this.isEqual(need, window)) return true;

        for (let i = s1.length; i < s2.length; i++){

         window[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;

         window[s2[i - s1.length].charCodeAt(0) - 'a'.charCodeAt(0)]--;
        
        if (this.isEqual(need, window)) return true;
        }
        return false;
    }
        isEqual(arr1, arr2) {
            for (let i = 0; i < 26; i++) {
                if (arr1[i] !== arr2[i]) return false;
            }
            return true;
    }
}


// PREP
// Given 2 strings, s1 & s2
// return true if s2 contains a permutation of s1 
//     otherwise return false
// Permutation = if substring letters can be rerranged to spell same order

// Ex) Strings only include lowercase chars
//         Input: s1 = "abc", s2 = "lecabee"
//         Output: true

//         Input: s1 = "abc", s2 = "lecaabee"
//         Output: false

//pseudocode
// make a freq count of all char in s1  
// make another freq count map for  first window in s2 (same length as s1)  
// if two freq maps match, return true  
// now start sliding window across s2  
    // remove the leftmost char from window count  
    // add new rightmost char into window count  
    // after each slide, check if freq maps match  
    // if they match, return true  
// if finish sliding all the way & never find a match, return false  
