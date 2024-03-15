#1)

name = input("ჩაწერე შენი სახელი ?")
lastname = input("ჩაწერე შენი გვარი ?")
age = int(input("ჩაწერე შენი ასაკი ?"))
location = input("ჩაწერე შენი საცხოვრებელი ?")

სია = []
სია.append(name)
სია.append(lastname)
სია.append(age)
სია.append(location)


print(სია)
print(სია[0:2])
print(სია[1:3])
print(სია[0:3])
print(სია[1:4])


#2)

num = int(input("შეიყვანე ნებისმიერი უარყოფითი რიცხვი ?"))
num_list = []
num_list.append(num)
num_list.append(-3)
num_list.append(-2)
num_list.append(-1)

print(num_list)



#3)

info = ["ცოტნე", "ნებიერიძე"]
print(info[0:1])
print(info[1:2])


#4)

movies = ["harry potter", "lord of the rings", "game of thrones", "minions", "kungfu panda"]
print(movies[0:4])
print(movies[1:5])
print(movies[2:6])
print(movies[3:5])

#5)

academy = input("რომელ აკადემიაში დადიხარ ?")
if academy == "GOA":
    print("შენ ჩადი ხარ")
else:
    print("სამწუხაროაა")



