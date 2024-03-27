#1)დავალება: შექმენით ოთხი მათემატიკური ფუნქცია, თითოეულს გადაეცით ორი არგუმენტი და სახელის შესაბამისად მოახდინეთ მუშაობა. ოპერაციები: +, -, *, /.


# def math1(num1,num2):
#     print(num1+num2)
#     print(num1-num2)
#     print(num1*num2)
#     print(num1/num2)

# math1(4,2)


# def math2(num1,num2):
#     print(num1+num2)
#     print(num1-num2)
#     print(num1*num2)
#     print(num1/num2)

# math2(6,2)

# def math3(num1,num2):
#     print(num1+num2)
#     print(num1-num2)
#     print(num1*num2)
#     print(num1/num2)

# math3(10,2)

# def math4(num1,num2):
#     print(num1+num2)
#     print(num1-num2)
#     print(num1*num2)
#     print(num1/num2)

# math4(8,4)



# #2)დავალება2: შექმენით ფუნქცია, რომელსაც გადასცემთ მართკუთხედის სიგრძესა და სიმაღლეს, გამოითვლით მის ფართობს.
# def tri(hight,length):
#     print("ფართობი იქნება",hight * length)

# tri(2,4)

# #3)დავალება3: შექმენით ფუნქცია, რომელსაც გადასცემთ მართკუთხედის ოთხ გვერდს, გამოითვლით მის პერიმეტრს.
# def square(first,second,third,fourth):
#     print("პერიმეტრი იქნება",first + second + third + fourth)

# square(2,4,7,9)

# #4)დავალება4: შექმენით ფუნქცია, რომელიც მიიღებს არგუმენტად სიას და დაბეჭდეთ სიის რიცხვების ჯამი, არ გამოიყენოთ sum. ?
# sia =[1,2,3,4]
# def sum(number1,number2):
#     print(number1 + number2)

# sum(sia())


#homework:

#1)შექმენით ფუნქცია, რომელსაც გადასცემთ თქვენ სახელს და გვარს. გამოიყენეთ split, indexing და დაბეჭდეთ თქვენი ინიციალები. test case: input) David Tezelashvili -> output) D.T


# name="cotne nebieridze"

# def test(name):
#     nameList = name.split()
#     print(nameList[0][0], nameList[1][0])
    
    
# # 0 -> cotne       0 -> c 1-> o -> 
# # 1 -> nebieridze
# test(name)







#2)შექმენით ფუნქცია, რომელსაც გადასცემთ სიას. თქვენი დავალებაა, რომ დაბეჭდოთ ამ სიის საშუალო არითმეტიკული (ჯამი / სიგრძე)

# listNumber = [1, 2, 3, 4, 5]

# def mean_of_list(Listnumber):
#     print("Sum    :", sum(Listnumber))
#     print("Length :", len(Listnumber))
#     print("Mean   :", sum(Listnumber)/len(Listnumber))

# mean_of_list(listNumber)




#3) შექმენით ფუნქცია, რომელსაც გადასცემთ სიტყვას და შემოწმდება არის თუ არა ის პალინდრომი (პალინდრომია სიტყვა, თუ მისი შებრუნებულიც იგივე გამოდის, მაგ: level)


# string1 = "word"
# string2 = "level"

# def is_palindrome(word):
#     reverse_word = ""

#     for i in range(len(word)-1, -1, -1):
#         reverse_word += word[i]
    
#     if reverse_word == word:
#         return True
#     else:
#         return False

# if is_palindrome(string1) == True:
#     print("The word ", string1, " is a palindrome !")
# else:
#     print("The word ", string1, " is NOT a palindrome !")



#4) შექმენით ფუნქცია, რომელსაც გადასცემთ სთრინგს. თქვენი დავალებაა, რომ ამ სთრინგს მოაშოროთ ყველა სფეისი - space და დაბეჭდოთ ამ სახით test case: input) "     Goal-   Oriented   Academy    " -> output) "Goal-OrientedAcademy"

stringSpaceRemove = "cat and dog"

def space_replace(expresssion):
    print(expresssion.replace(" ", ""))

space_replace(stringSpaceRemove)




#5) შექმენით ფუნქცია, რომელსაც გადასცემთ სიას. ამ სიაში უნდა გქონდეთ როგორც დადებითი, ასევე უარყოფითი რიცხვები. თქვენი დავალებაა, რომ გამოიტანოთ უარყოფითი რიცხვების რაოდენობა და დადებითი რიცხვების ჯამი (გამოიყენეთ for ციკლი ორივეზე)


sia = [5, -3, 4, -1]

def pos_and_neg_sum(list):
    sum_pos = 0
    sum_neg = 0
    
    for num in list:
        if num > 0:
            sum_pos += num
        elif num < 0:
            sum_neg += num
        
    return sum_pos, sum_neg

print(pos_and_neg_sum(sia))
sum_pos, sum_neg = pos_and_neg_sum(sia)
print(sum_pos)
print(sum_neg)












