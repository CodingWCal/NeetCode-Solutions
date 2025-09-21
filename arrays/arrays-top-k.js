class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
    let map = {}; 
    let buckets = []; 
    let result = [];

    // Count freq of each num
    for (let i = 0; i < nums.length; i++) { 
        map[nums[i]] = (map[nums[i]] || 0) + 1; 
    }

    for (let [num, freq] of Object.entries(map)) {
        if (!buckets[freq]) { 
            buckets[freq] = new Set(); 
        }
        buckets[freq].add(num); 
    }

    for (let i = buckets.length - 1; i >= 0; i--) {
        if (buckets[i]) {
            result.push(...buckets[i]);
            if (result.length >= k) break; 
        }
    }

    return result.slice(0, k); //return k's
    }
}
