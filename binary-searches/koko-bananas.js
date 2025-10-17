class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
    let left = 1;
    let right = Math.max(...piles);

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      let hours = 0;
      for (let pile of piles) {
        hours += Math.ceil(pile / mid);
      }

      if (hours <= h) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return left;
    }
}

// PREP
// Given integer array PILES where Piles[i] is number of bananas in the ith pile.  Integer h which reps # of hours you have to eat all bananas
// May decide bph rate of K, may choose pile of bananas and eat k bananas from pile, if pile < k, may finish eating but cant eat from another pile in same hr

// Return min integer k to eat all bananas in h hours

// EX)
// Input: piles = [1,4,3,2], h = 9
// Output: 2

//Start with a search range for k:

// left = 1 banana/hour (slowest possible).
// right = max pile size (fastest possible).

// While left ≤ right:

// Find mid = average eating speed.
// Simulate: calculate total hours needed if Koko eats at speed mid.

// For each pile: add Math.ceil(pile / mid) to hours.
// If total hours ≤ h → she can finish on time, so try slower speed → move right left.

// Else → she’s too slow → move left right.

// When loop ends, left will be the smallest speed that works.