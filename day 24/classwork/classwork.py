#1
# def litres(time):
#     return int(time * 0.5)

#2
# def paperwork(n, m):
#     if n < 0 or m < 0:
#         return 0
#     else:
#         return n * m
   
#3
# def grow(arr):
#     m = 1
#     for n in arr:
#         m *= n
#     return m

#4

# def fake_bin(x):
#   result = "";
#   stringNum = x;
#   for digit in stringNum:
#     if int(digit) >= 5:
#       result += "1";
#     if int(digit) < 5:
#       result += "0";
#   return result;


#5
# def count_by(x, n):
#     return [i * x for i in range(1,n+1)]

#6
def toJadenCase(string):
    return ' '.join(i.capitalize() for i in string.split(" ")) #?

#7
def accum(st):
    str = accum("abcd")


#8
# def remove_smallest(numbers):
#     if len(numbers) < 2:
#         return []
#     else:
#         nums = numbers.copy()
#         nums.remove(min(numbers))
#         return nums

#9
# def solution(number):
#     result = []
#     for i in range(1, number):
#         if i % 3 == 0 or i % 5 == 0:
#             result.append(i)

#     return sum(result)
#10
def likes(names):
    # your code here

