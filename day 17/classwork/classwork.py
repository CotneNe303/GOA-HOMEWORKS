# even_list = []
# odd_list = []

# def summ(Listn):
#     for i in Listn:
#         if i % 2 == 0:
#             even_list.append(i)
#         else:
#             odd_list.append(i) 
#     sum_even = sum(even_list)
#     sum_odd = sum(odd_list)
#     return[sum_even, sum_odd]



# print(summ([1,2,3,4,5]))


#join

# name = "cotne nebieridze"
# name_list = name.split(" ")
# new_name = " ".join(name_list)

# print(name_list)
# print(new_name)

# lsitn = ["goal", "orianted", "academy"]
# new_listn = " ".join(lsitn)
# print(new_listn)

#შექმენით რომელსაც მისცემთ list ტიპის არგუმენტს, შეაერთეთ რაიმე წინადადება, შემდეგ კი გმაოიტანეთ ტერმინალში

# def sentence(words):
#     new_sentence = " ".join(words)
#     return new_sentence


# print(sentence(["goal", "oriented", "acadey"]))

# words = ["goal", "oriented", "acadey"]
# sentence = " ".join(words)

# print(sentence)

# def joinn(listen):
#     sentence = ""
#     for i in listen:
#         sentence += i + " "
#     return sentence



# print(joinn(["goal", "oriented", "acadey"]))

word = "string"  # upper ფუნქცია სტრინგ მნიშვნელობის სიმბოლოებს ზრდის
print("stirng".upper())

word = "STRING"  # lower ფუნქცია სტრინგ მნშივნლეობაში სიმბოლოებს აპატარსვებს
print("stirng".lower())

word = "string" #capitalize ფუნქცია სტრინგ მნიშვნელობაში სიმბოლოებს უცვლის კაპიტალს ანუ პირველ ასოს
print("string".capitalize())

word =  "string"
print(word.find(3))