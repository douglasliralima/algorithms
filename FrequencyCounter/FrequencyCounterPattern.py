import math
# Accept two arrays return true if the value of the first squared can be found in the second

# same([1,2,3], [1,4,9]) true
# same([3,1,4], [16,1,9]) true
# same([1,2], [1,4,9]) true
# same([1,2,2], [1,4,9]) false
# same([], [1,4,9]) true - exception

def same(arr1, arr2):
    #Get the value of the first, then interpolate the second looking with we find its value squared O(n²)

    #Use map or set
    #interpolate the second and store its values in a map with key the number and value its frequency
    #Check if the second has the first of the second squared

    arr2_dict = {}
    for i in arr2:
        arr2_dict[i] = 1 if not arr2_dict.get(i) else arr2_dict[i] + 1
    
    same = True
    for i in arr1:
        if not arr2_dict.get(i**2) or arr2_dict[i**2] == 0:
            same = False
        else:
            arr2_dict[i**2] -= 1
    
    return same

assert(same([1,2,3], [1,4,9]) == True)
assert(same([3,1,4], [16,1,9]) == True)
assert(same([1,2], [1,4,9]) == True)
assert(same([1,2,2], [1,4,9]) == False)
assert(same([], [1,4,9]) == True)
assert(same([5,6], [1,4,9]) == False)