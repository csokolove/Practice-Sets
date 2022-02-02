# Daily Coding Problem: Problem #5 [Medium]

## Problem

This problem was asked by Jane Street.

`cons(a, b)` constructs a pair, and `car(pair)` and `cdr(pair)` returns the first and last element of that pair. For example, `car(cons(3, 4))` returns `3`, and `cdr(cons(3, 4))` returns `4`.

Given this implementation of cons:

```py
def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair
```

Implement `car` and `cdr`.

## Design

Utilizing Python since the question was asked using Python.

The question already explains the basic outline of how this basic program should be written. We can use the same function structure used by `cons()`, but rather than returning an entire pair, we only need to return the first or last parameter passed.

Overall, this program felt almost *too* easy, like I was missing something. I may revisit this to see if I had an oversight on something.