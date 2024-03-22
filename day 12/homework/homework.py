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

for i in range(num, 0):
    num_list.appemd(i)

print(num_list)



#3)

info = "ცოტნე ნებიერიძე"
print(info[0:5])
print(info[6:])


#4)

movies = ["harry potter", "lord of the rings", "game of thrones", "minions", "kungfu panda"]
print(movies[0:4])
print(movies[1:5])
print(movies[2:5])
print(movies[3:4])

#5)

academy = input("which academy you are learning in ?")

if academy.startswith("G"):
    print("you are chad")
else:
    print("too bad")





