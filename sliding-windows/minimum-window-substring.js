class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t === '') return '';

        let left = 0;
        let tCount = {};
        let window = {};

        for (let char of t){
            tCount[char] = (tCount[char] || 0) + 1;
        }

        // # unique chars we satisfy already
        let need = Object.keys(tCount).length;

        // # unique chars to satisfy
        let have = 0;

        let res = [-1, -1];
        let resLen = Infinity

    for(let right = 0; right < s.length; right++){
        let char = s[right];
        window[char] = (window[char] || 0) + 1;

        if (tCount[char] && window[char] === tCount[char]) {
            have++;
        }

        while (have === need) {
            if((right - left + 1) < resLen){
                res = [left, right];
                resLen = right - left + 1;
            }

            let leftChar = s[left];
            window[leftChar] --;
            if (tCount[leftChar] && window[leftChar] < tCount[leftChar]) {
                have --;
            }
            left ++;
        }
    }
        let [resL, resR] = res;
        return resLen === Infinity ? '' : s.slice(resL, resR + 1);

    }
}

// PREP
// Given strings s & t
// return shortest substring in s
//     that contains all char in t, including dups in substring
//     otherwise return empty string

// Ex)
// Input: s = "OUZODYXAZV", t = "XYZ"
// Output: "YXAZ"
// Explanation: "YXAZ" is shortest substring that includes "X", "Y", and "Z" from string t.

// Input: s = "xyz", t = "xyz"
// Output: "xyz"

// Input: s = "x", t = "xy"
// Output: ""

// Pseudocode
// 2 strings, s (big) & t (target).
// count chars in t, store freq.
// have window [left, right]. Start left=0.

// increase right → add char to window freq.
// if window freq meets target freq for that char → inc satisfied count.

// when satisfied count == total needed → valid window.
// check if window smaller than best → update result.

// then shrink left: remove char freq, move left++.
// if window no longer satisfies → dec satisfied count, stop shrinking.

// repeat til right hits end.
// return best substring if found, else """