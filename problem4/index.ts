/*
    Using recursion.
    - Time complexity: O(n).
    - Space complexity: O(n).
    - Efficiency: Due to the recursive call and the memory usage of call stack,
    this is the least efficient approach in both time and space complexity.
*/
function sum_to_n_recursion(n: number): number
{
    if (n <= 0)
    {
        return 0;
    }
    return n + sum_to_n_recursion(n - 1);
}


/*
    Using for loop.
    - Time complexity: O(n).
    - Space complexity: O(1).
    - Efficiency: Although space complexity is efficient, due to the for loop,
    this approach can be inefficient in time complexity where n is a very large number.
*/
function sum_to_n_loop(n: number): number
{
    let sum = 0;
    for (let i = 1; i <= n; i++)
    {
        sum += i;
    }
    return sum;
}


/*
    Using mathematical formula.
    - Time complexity: O(1).
    - Space complexity: O(1).
    - Efficiency: This is the most efficient approach in both time and space complexity.
*/
function sum_to_n_mathematical(n: number): number
{
    return (n * (n + 1)) / 2;
}

console.log(sum_to_n_recursion(5));
console.log(sum_to_n_loop(5));
console.log(sum_to_n_mathematical(5));