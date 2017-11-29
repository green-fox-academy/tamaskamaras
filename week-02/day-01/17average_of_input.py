# Write a program that asks for 5 integers in a row,
# then it should print the sum and the average of these numbers like:
#
# Sum: 22, Average: 4.4

print("Please give me five numbers one after another!")
num1 = int(input())
num2 = int(input())
num3 = int(input())
num4 = int(input())
num5 = int(input())

sum = num1 + num2 + num3 + num4 + num5

print("Sum:", sum, "Agerage:", sum // 5)