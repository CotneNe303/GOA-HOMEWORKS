#1
# listn = [24, 15, 5.6, 2, 4.3]
# def processList(numberList):
#     processedList = []
#     for number in numberList:
#         if number.is_integer():
#             processedList.append(number *2)
#         else:
#             processedList.append(number * 4)
#     return processedList
# print(processList(listn))

#2
# name_examples = ["thibault", "nini", "cotne", "tamuna", "anais"]
# def processed_names(name_list):
#     for i in range(len(name_list)):
#         if i % 2 == 0:
#             name_list[i] = name_list[i].upper()
#         else:
#             name_list[i] = name_list[i].lower()
#     return name_list

# print(processed_names(name_examples))


#3
# sentence =  "hello i am cotne and i learn python !"
# def processd_sentence(phrase_to_process):
#     result = ""
#     words = phrase_to_process.split()
#     for word in words:
#         word = word.capitalize()
#         result += word + " "

#     return result
# print(processd_sentence(sentence))
        
#4
# random_list = ["word", "Word", "word", "woRd", 1, 2, 5,2,1,3,6]
# def process_lists(list_to_process):
#     new_list = [] #unique list
#     for i in list_to_process:
#         if i not in new_list:
#             new_list.append(i)
#     return new_list
# print(process_lists(random_list))


#5
# random_list = ["word", "Word", "word", "woRd", 1, 2, 5,2,1,3,6]
# def process_lists(list_to_process):
#     new_list = [] #unique list
#     duplicate_list = []
#     for i in list_to_process:
#         if i in new_list:
#             duplicate_list.append(i)
#         if i not in new_list:
#             new_list.append(i)
#     return duplicate_list
# print(process_lists(random_list))

#6
# random_list = ["word", "Word", "word", "word", 1, 2, 5,2,1,3,6]
# def search_list(list_to_search, search_term):
#     counter = 0
#     for i in list_to_search:
#         if i == search_term:
#             counter += 1
#     return counter
# print(search_list(random_list,"word"))

#7.1 with append
# num_list = [14,56,78,31,46,77,95,91]
# def remove_even_from_list(listn):   
#     new_listn = []
#     for i in listn:
#         if i % 2 != 0:
#             new_listn.append(i)
#     return new_listn
# print(remove_even_from_list(num_list))
#7.1 with pop
# num_list = [14,56,78,31,46,77,95,91]
# def remove_even_from_list2(listn):   
#     for i in range(len(listn)-1, -1, -1): 
#         if listn[i] % 2 == 0:
#             listn.pop(i)
#     return listn
# print(remove_even_from_list2(num_list))
            
#8
# list1 = [14,56,78,31,46,77,95,91]
# list2 = ["word", "Word", "word", "word", 1, 2, 5,2,1,3,6]
# def combine_list(listn1,listn2):

#     return listn1 + listn2

# print(combine_list(list1, list2))

#9
# combine_list = ["cotne", 15, 24.5,False, "nini", 15, "nini", True, False, "thibault"]

# def only_one_in_list(listn):
#     new_list= []
#     for i in listn:
#         if listn.count(i) == 1:
#             new_list.append(i)
#     return new_list
            

# print(only_one_in_list(combine_list))