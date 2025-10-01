class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let maxLength = 0;
        const characterSet = new Set();

        for(let right = 0; right < s.length; right++){
            while(characterSet.has(s[right])){
                characterSet.delete(s[left]);
                left ++;
            }

            characterSet.add(s[right]);

            maxLength = Math.max(maxLength, right - left + 1);
        }
                return maxLength;
    }
}

// PREP
// Params:Given string s
// Returns: find length of longest substring without dup chars
// Example)
//     Input: s = "zxyzxyz"
//     Output: 3

//     Input: s = "xxxx"
//     Output: 1

// Pseudocode
// set left pointer = 0
// set empty set (or hashmap) keep track of seen chars
// set maxLength = 0

// loop w right pointer from 0 up to end of s
    // if s[right] not in seen set:
        // add s[right] to set
        // update maxLength = max(maxLength, sz of window = right - left + 1)
        // when dup found shrink slidin window sz

    // else (s[right] is dup):
        // while s[right] already in set:
            // remove s[left] from set
            // move left forward (left++)
        // add s[right] to set after dup cleared, adds new char
        // update maxLength again

// return maxLength
