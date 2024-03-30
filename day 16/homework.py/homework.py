#1) შექმენით ფუნქცია რომელიც სიაში ლუწ ინდექსებზე მდგომ რიცხვთა ჯამს დააბრუნებს, შესატანი მონაცემები: [1,2,3,4,5] ---- გამოსატანი მონაცემები (შედეგი):  9

# numberList = [1,2,3,4,5]


# # even_sum() -> function to call
# # param numbers -> list with numbers
# # result -> integer that hold the sum
# def even_sum(numbers): 
#     i = 0
#     result = 0
#     while (i < len(numbers)):
#         if i % 2 == 0:
#             print(numbers[i])
#             result += numbers[i]
#         i+=1
#     return (result)

# print(even_sum(numberList))


#2)შექმენით ფუნქცია რომელიც გამოითვლის კენტების და ლუწების ჯამს ცალცალკე, დააბრუნეთ სია სადაც იქნება ეს ჯამები ჩასმული, შესატანი მონაცემები [1,2,3,4,5] ---- გამოსატანი მონაცემები [6, 9] 

# numberList = [1,2,3,4,5]

# # even_and_odd_sum() -> function to call
# # param numbers -> list with numbers
# def even_and_odd_sum(numbers): 
#     i = 0
#     result_even = 0
#     result_odd = 0
#     while (i < len(numbers)):
#         if i % 2 == 0:
#             # print(numbers[i])
#             result_even += numbers[i]
#         elif i % 2 != 0:
#             result_odd += numbers[i]
#         i+=1
#     return [result_odd, result_even]

# # (result_odd, result_even) -> tuple 
# # [result_odd, result_even] -> array = list in python
# print(even_and_odd_sum(numberList))

#3) შექმენით ფუნქცია რომელიც დაგიბრუნებთ სიაში მყოფ ელემენტების რაოდენობას, შესატანი მონაცემები: [1,2,3,4,5] ---- გამოსატანი მონაცემები (შედეგი): 5--------- შესატან მონაცემებში იგულისხმება ის რომ ფუნქციას გადაცეთ კონკრეტული მნიშვნელობა

numberList = [1,2,3,4,5]

def list_size(list):
    return len(list)

print(list_size(numberList))

#4) შექმენი ფუნქცია replace-ის ფუნქცია