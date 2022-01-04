# provided example values
arr = [10, 15, 3, 7];
k = 17;

# return false unless proven otherwise
rvalue = False;
# create a new hashset
hashset = set();

# loop through the array & check if subtracting n (array value) from k is in the set
for i in range(0, len(arr)):
    if k-arr[i] in hashset:
        rvalue = True;
    hashset.add(arr[i]);
print(rvalue);