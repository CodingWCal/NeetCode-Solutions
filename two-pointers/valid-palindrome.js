class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        //clean string and remove all non alphanumerics globally, turn to lowercase
        const cleanString = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();

        //2 pointers, first index at left, second index at right using -1 to account for 0 
        let left = 0;
        let right = cleanString.length - 1;

        //while loop, loops continues in condition w left less than right so they dont overlap
        while(left < right){
            //if statement checks/compares for each char under both pointers, unequal mismatches return false 
            if(cleanString[left] !== cleanString[right]){
                return false;
            }
            //move inwards towards each other
            left ++; 
            right --;
        }
        return true;
    }
}

//const ifPalindrome = cleanString.split('').reverse().join('');

        // if(cleanString === ifPalindrome){
        //     return true;
        // }else{
        //     return false;
        // }

//Given a String
//Return True if palindrome
//Example: "Was it a car or a cat I saw?"

//Pseudocode:
//Clean the string, remove all punctuation w regex
//turn all characters into lowercase to keep consistent
// Split up our cleaned string into an array
//Array holds each character from our cleaned string as separate letter values in array
//Reverse the order of the array
//then convert the array back to string and rejoin the individual characters together
//lastly check if our new reversed string is in fact equal to our original cleaned string to compare if palindrome