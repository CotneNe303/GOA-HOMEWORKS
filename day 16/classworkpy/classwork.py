# def add(num1,num2):
#     print(num1 + num2)


# def subtract(num1,num2):
#     print(num1 - num2)

# def multiply(num1,num2):
#     print(num1 * num2)

# def devide(num1,num2):
#     print(num1 / num2)

# add(1,2)
# subtract(1,2)
# multiply(1,2)
# devide(1,2)

# num = 15

# def add():
#     num1 = 5       #გლობალურია ცვლადი არის რომელიც შეიქმნა კოდის ბლოკის გარეთ      ლოკალური არის ისეთი ცვლადი ორმელიც შეიქმნა კოდის ბლოკში (for ტანი)
#     print(num)

# add()


# def area(width, height):
#     print(width * height)

# area(5,10)


# def my_sum_func(numbers_list): # [1,2,3,4,5] 
#     sum = 0

#     for i in numbers_list:
#         sum = sum + i

#     print(sum)
# my_sum_func(1,2,3,4,5)



# def find_min_max(number_list):
#     min = number_list[0]
#     max = number_list[0]


#     for i in number_list:
#         if min > i:
#             min = i 
#         if max < i: 
#           max = i


#     print(min,max)
# find_min_max([1,2,3,4,5])


# def initial_chars(fullname):
#     splited_fullname = fullname.split(" ")
#     print(splited_fullname)

#     firstname = splited_fullname[0]
#     lastname = splited_fullname[1]

#     print(firstname)
#     print(lastname)

#     result = firstname[0] + "." + lastname[1]
#     print(result)

# initial_chars("Cotne Nebieridze")


# def average_arithmetic(number_list):
#     jami = sum(number_list)
#     result = jami // len(number_list)
#     print(result)

# average_arithmetic([1,2,3])


# def  is_palindrome(word):
#     reversed_word = ""

#     for i in range(len(word) - 1, -1, -1):
#         reversed_word = reversed_word + word[i]
        
#     print(reversed_word == word)


# is_palindrome("luka")



# def remove_spaces(word):
#     word_without_space = ""

#     for char in word:
#         if char != " ":
#             word_without_space = word_without_space + char
#     print(word_without_space)

# remove_spaces("lasha giorgi")



# def func(number_list):
#     sum = 0
#     quantity = 0

#     for num in number_list:
#         if num >= 0:
#             sum = sum + num
#         else:
#             quantity = quantity + 1
#     print(sum,quantity)
# func([1,2,3,-1,-2,-3])