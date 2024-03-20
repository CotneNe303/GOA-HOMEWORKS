# 1) შექმენით სია სადაც გადასცემთ 10 ინტეგერს, შემდეგ გადაუარეთ ამ სიას და თითოეული მათგანი გაამრავლეთ/გაყეთ/დაუმატეთ/გამოაკელით ერთმანეთს. (ექსპერიმენტებიც გააკეთეთ)


num_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for i in num_list:
    print(num_list[i] * 2)

num_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for i in num_list:
    print(num_list[i] / 2)


    num_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for i in num_list:
    print(num_list[i] + 2)


    num_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for i in num_list:
    print(num_list[i] - 2)


    

 #2) შექმენით სია, სადაც გამოიტანთ სათითაოდ მნიშვნელობებს და ასევე ჩაანაცვლებთ სხვა მნიშვნელობებით.
    

food_list = ["apple", "orange", "milk"]
print(food_list[0])
print(food_list[1])
print(food_list[2])
food_list[1] = "chocolate"
print(food_list)

# 3 დავალება შექმენით სია და მომხმარებელს აარჩევინეთ სასურველი მნიშვნელობა

movie_list = ["kungfu panda 4", "The karate kid", "Cobra Kai"]
choice = int(input("wich one is your favourite movie? "))
print(movie_list[choice])