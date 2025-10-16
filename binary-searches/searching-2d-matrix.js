class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rows = matrix.length;
        const columns = matrix[0].length;

        let left = 0;
        let right = (rows * columns) - 1;

        while (left <= right){
            const middle = Math.floor((left + right) / 2);
            const row = Math.floor(middle / columns);
            const col = (middle % columns);
            const midValue = matrix[row][col];

            if (midValue === target) {
                return true;
            } else if (midValue < target) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }
        return false;
    }
}

// PREP
// Given m x 2 2D integer array MATRIX & integer TARGET
//     Sorted in non-decreasing order

// Return true if target exist in matrix, if not return false

// Solution must run in O(log(m * n)) time

// Example)
// Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 10
// Output: true

//PSEUDO
// Get total rows & columns.
// Treat matrix as one long sorted list.

// Set left at start, right at end.

// While left hasn’t passed right:
// Find the middle position between them.

// Convert middle index into its row and column spot.

// Check that number:
// If it equals target → return true.
// If smaller → move left forward (search right half).
// If larger → move right backward (search left half).

// If we finish searching and don’t find target → return false.