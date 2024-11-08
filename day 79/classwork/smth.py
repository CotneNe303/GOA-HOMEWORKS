# GW = [
#     "გიორგი პაპუნაშვილი",
#     "ცოტნე ნებიერიძე",
#     "ნიკოლოზ კუკავა",
#     "დათო ბერუაშვილი",
#     "თორნიკე თაბუკაშვილი",
#     "გიორგი ჭანკვეტაძე",
#     "მათე ოკინაშვილი",
#     "სანდრო სურიაკოვი",
#     "დემე გოისაშვილი",
#     "დიმიტრი უგრეხელიძე",
#     "ცოტნე ბაჯელიძე",
#     "იოანე ცერცვაძე",
#     "ლაშა თაზიაშვილი",
# ]

# Nchavleishvili = []
# Sabashuashvili = []
# Dchxikvadze = []




# import random  

# def group_mosw(students):
#     random.shuffle(students)  

    
#     group1, group2, group3 = [], [], []

    
#     for i in range(len(students)):
#         if i % 3 == 0:
#             group1.append(students[i])
#         elif i % 3 == 1:
#             group2.append(students[i])
#         else:
#             group3.append(students[i])

#     return group1, group2, group3

# def listn():
#     GW = [
#         "გიორგი პაპუნაშვილი",
#         "ცოტნე ნებიერიძე",
#         "ნიკოლოზ კუკავა",
#         "დათო ბერუაშვილი",
#         "თორნიკე თაბუკაშვილი",
#         "გიორგი ჭანკვეტაძე",
#         "მათე ოკინაშვილი",
#         "სანდრო სურიაკოვი",
#         "დემე გოისაშვილი",
#         "დიმიტრი უგრეხელიძე",
#         "ცოტნე ბაჯელიძე",
#         "იოანე ცერცვაძე",
#         "ლაშა თაზიაშვილი",
#         "ნიკა სუხიშვილი"
#     ]
    
    
#     group1, group2, group3 = group_mosw(GW)

   
#     print("Nchavleishvili:", ', '.join(group1))
#     print("Sabashuashvili:", ', '.join(group2))
#     print("Dchxikvadze:", ', '.join(group3))

# if __name__ == "__listn__":
#     listn()



import random  # Import the random module

def group_students(students):
    random.shuffle(students)  # Shuffle the list of students

    # Create groups
    group1, group2, group3 = [], [], []

    # Distribute students into groups
    for i in range(len(students)):
        if i % 3 == 0:
            group1.append(students[i])
        elif i % 3 == 1:
            group2.append(students[i])
        else:
            group3.append(students[i])

    return group1, group2, group3

def main():
    GW = [
        "გიორგი პაპუნაშვილი",
        "ცოტნე ნებიერიძე",
        "ნიკოლოზ კუკავა",
        "დათო ბერუაშვილი",
        "თორნიკე თაბუკაშვილი",
        "გიორგი ჭანკვეტაძე",
        "მათე ოკინაშვილი",
        "სანდრო სურიაკოვი",
        "დემე გოისაშვილი",
        "დიმიტრი უგრეხელიძე",
        "ცოტნე ბაჯელიძე",
        "იოანე ცერცვაძე",
        "ლაშა თაზიაშვილი",
    ]
    
    # Group the students
    group1, group2, group3 = group_students(GW)

    # Display the groups
    print("Nchavleishvili:", ', '.join(group1))
    print("Sabashuashvili:", ', '.join(group2))
    print("Dchxikvadze:", ', '.join(group3))

if __name__ == "__main__":
    main()