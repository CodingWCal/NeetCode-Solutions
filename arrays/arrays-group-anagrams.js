class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const sortStrs = strs.map(word => word.split('').sort().join(''));
        const hash = {};

            for (let i = 0; i < strs.length; i++){
                if(!hash[sortStrs[i]]) {
                    hash[sortStrs[i]] = [strs[i]];
                }else{
                    hash[sortStrs[i]].push(strs[i]);
                }
            }
            return Object.values(hash);
    };
}
