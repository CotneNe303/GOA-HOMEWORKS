#1)
# expression = "hello World !"

# def stringTool1(word):
#     print(word.lower())
#     print(word.upper())
#     print(word.capitalize())
#     print(word.find(" "))

# stringTool1(expression)

# def stringTool2(word, operation):
#     if operation == "lower":
#         print(word.lower())
#     elif operation == "upper":
#         print(word.upper())
#     elif operation == "cap":
#         print(word.capitalize())
#     elif operation == "find":
#         search = input("Wich expression would you like to find ?")
#         print(word.find(search))
    

# stringTool2(expression,"lower")
# stringTool2(expression,"upper")
# stringTool2(expression,"cap")
# stringTool2(expression,"find")


#2)
names_list = ["name1", "name2", "name3", "name4"]

def find_and_change(listn):
    index = int(input("Wich index would you like to change ?"))
    listn[index] = input("What is the new value ?")
    print(listn)

find_and_change(names_list)