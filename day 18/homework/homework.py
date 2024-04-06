#1 მომხმარებელს შემოატანინეთ სახელი. თქვენი დავალებაა, რომ შეადაროთ სახელი მის lowercase ვარიანტთან == ოპერატორის გამოყენებით.

# user_input = input("enter your name please broski :")

# if user_input == user_input.lower():
#     print("Valid username")
# else:
#     print("choose again.")

#2 მომხმარებელს შემოატანინეთ სიტყვა. for ციკლის გამოყენებით შეამოწმეთ მისი თითოეული ასო და თუ რომელიმე იქნება lowercase, მაშინ მომხმარებელს შემოატანინეთ სიტყვა თავიდან. ასევე დაბეჭდეთ თუ რამდენჯერ მოუწია მომხმარებელს სიტყვის შემოტანა - counter.

# user_infov = input("Please enter your username broski : ")
# counter = 0
# for i in range(0, len(user_infov)):
#     if user_infov[i].islower():
#         print("Try again")
#         user_infov = input("Please re-enter it:")
#         counter += 1
#         i = 0

# print("Good job ! You only missed", counter, "times.")

#3 მომხმარებელს შემოატანინეთ სიტყვა. თქვენი დავალებაა, რომ ლუწ ინდექსებზე მყოფი ასოები გარდაქმნათ uppercase-ად, ხოლო კენტ ინდექსებზე მყოფები lowecase-ად, საბოლოოდ კი დაბეჭდოთ შედეგი.

# user_infon = input("Please enter any word broski : ")
# word = ""
# for i in range(0, len(user_infon)):
#     if i % 2 == 0:
#         word += user_infon[i].upper()
#     elif i % 2 != 0:
#         word += user_infon[i].lower()

# print(word)

#4 ცვლადში შეინახეთ თქვენი სახელი. თუ მისი სიგრძე აღემატება ხუთს, გარდაქმენით მთლიანი სიტყვა uppercase-ად, სხვა შემთხვევაში კი lowecase-ად. საბოლოოდ კი დაბეჭდეთ გარდაქმნილი სახელი.

# name = "cotne"
# if len(name) > 5:
#     print(name.upper())
# elif len(name) <= 5:
#     print(name.lower())

#5 სიაში შეინახეთ თქვენი სახელი და გვარი. capitalize მეთოდის გამოყენებით მასივის ყველა ელემენტზე მოახდინეთ მუშაობა და ბოლოს დაბეჭდეთ უკვე შეცვლილი სია.

# saxeli_gvari = ["cotne", "nebieridze"]
# edited_list = []
# for name in saxeli_gvari: 
#     edited_list.append(name.capitalize())

# print(edited_list)

#6 მოხმარებელს შემოატანინეთ სიტყვა და საძიებელი ასო. თქვენი დავალებაა, რომ სიტყვაში პირველივე შემხვედრი ამ ასოს ინდექსი დაბეჭდოთ, არ არსებობის შემთხვევაში კი უბრალოდ -1.

# word = input("please enter a word :")
# word_search_char = input("please enter a char to find :")
# status = False
# for i in range(0,len(word)):
#     if word[i] == word_search_char:
#         status = True
#         print("Found at", i)

# if status == False:
#     print("-1")


