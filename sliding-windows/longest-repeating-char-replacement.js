class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let maxLength = 0;
        const map = new Map();
        let maxFreq= 0;

        for(let right = 0; right < s.length; right++){
            let char = s[right];
            map.set(char, (map.get(char) || 0) + 1);

            maxFreq = Math.max(maxFreq, map.get(char));

        let windowSz = right - left + 1;
        if (windowSz - maxFreq > k) {
            let leftChar = s[left];
            map.set(leftChar, map.get(leftChar) - 1);
            left++;
        }
            maxLength = Math.max(maxLength, right - left + 1);
        }
        return maxLength;
    }
}

// PREP
// GIVEN STR S OF ONLY UPPERCASE & INTEGER K
// CAN CHOOSE UP TO K CHAR AND REPLACE W ANY OTHER UPPERCASE
// AFTER PERFORMING MOST K REPLACEMENTS 

// RETURN LENGTH OF LONGEST SUBSTR W ONLY 1 DISTINCT CHAR

// EX - 
// Input: s = "XYYX", k = 2
// Output: 4

// Input: s = "AAABABB", k = 1
// Output: 5

//PSEUDOCODE
// set left pointer to 0  
// set maxLength to 0  
// create map to count chars  
// set maxFreq to 0  

// loop w right pointer cross string:  
//     add current character to map  
//     update maxFreq if this char is now most freq  

//     if window is not ok:  
//         remove one char at left from map  
//         move left pointer fwd  

//     update maxLength w current window size  

// return maxLength  
