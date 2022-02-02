# Provided by the problem
def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair

# Return the first value of a pair
def car(pair):
    def first(a, b):
        return a
    return pair(first)

# Return the last value of a pair
def cdr(pair):
    def last(a, b):
        return b
    return pair(last)

# Test cases
print(car(cons(3, 4)));
print(cdr(cons(3, 4)));