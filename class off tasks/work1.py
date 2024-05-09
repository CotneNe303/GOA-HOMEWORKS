# Cotne Nebieridze 07/05/2024

#
# Create a function that take a string as a parameter "Hello world" and a character "o", do error handling and return a list with the index of the character in the string -> [4,7]
#
random_string = "hello world"
def stringn(sentence, char_to_find):
    list_index = []
    for i in range(len(sentence)):
        if char_to_find == sentence[i]:
            list_index.append(i)
    return list_index
print(stringn(random_string, "o"))