# 1)

# def manual_pop(words,indexToPop = None):
#     new_words = []

#     if (indexToPop == None):
#         indexToPop = len(words)-1

#     for num in range (0,len(words)):
#         if num != indexToPop:
#             new_words.append(words[num])
#     return new_words
# words = ["ჭოგრიტი", "ბინოკლი", "მუზარადი", "ლამპა"]
# print(manual_pop(words, 2))
# print(manual_pop(words))

# 2)

# def manual_count(library, item_to_count = None):
#     conut = 0

#     if (item_to_count == None):
#         item_to_count = sum(library) // len(library)

#     for item in library:
#         if item == item_to_count:
#             conut = conut + 1

#     return conut

# numList1 = [10, 11, 10, 10]
# numList2 = [1, 2, 3, 4]
# print(manual_count(numList1, 10)) # 3
# print(manual_count(numList2)) # 1

#3)
# def manual_min(numList=None):

#     if (numList == None):
#         numList = [1,2,3,4,5,6,7,8,9,10]

#     minFound = numList[0]
#     for value in numList:
#         if value < minFound:
#             minFound = value
#     return minFound

# numList = [3, 2, 1, 4]
# print(manual_min(numList))
# print(manual_min())


#4)
# def manual_max(numList=None):

#     if (numList == None):
#         numList = [1,2,3,4,5,6,7,8,9,10]

#     minFound = numList[0]
#     for value in numList:
#         if value > minFound:
#             minFound = value
#     return minFound

# numList = [3, 2, 1, 4]
# print(manual_max(numList))
# print(manual_max())
