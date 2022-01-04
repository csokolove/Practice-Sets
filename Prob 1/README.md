# Daily Coding Problem: Problem #1 [Easy]

## Problem

This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?

## Design

Utilizing Python since its a good multi-purpose language, and I am working to improve my Python skills.

I will use a for loop to traverse through the provided array, checking to see if subtracting n from k is present in the hashset.

The hashset will avoid a common mistake, as pointed out by many on StackOverflow, of `k/2 == i` or `20-10 == 10`. Without a hashset, false-positives would occur in problems like the one outlined here.