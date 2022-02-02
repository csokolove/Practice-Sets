# Daily Coding Problem: Problem #2 [Hard]

## Problem

This problem was asked by Uber.

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?

## Design

Utilizing JavaScript since I have the most knowledge using it.

I will use a for loop to traverse through the provided array, then using a nested loop, push each item to a new array. Once all values have been pushed to this new array, I splice the index to be removed. Then using ES6 forEach, I traverse each value and multiply the current product by the current value, and assign it to the current product. Lastly, after each iteration of `i`, I will push the product to the returnable array & reset the current product.

This code is very messy, but it's functional in most, if not all, use cases. In the future, I may remove redundancy & make the code less complex. 