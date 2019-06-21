# Write a program that asks for two numbers
# The first number represents the number of girls that comes to a party, the
# second the boys
# It should print: The party is exellent!
# If the the number of girls and boys are equal and there are more people coming than 20
#
# It should print: Quite cool party!
# It there are more than 20 people coming but the girl - boy ratio is not 1-1
#
# It should print: Average party...
# If there are less people coming than 20
#
# It should print: Sausage party
# If no girls are coming, regardless the count of the people

girls = int(input("Provide the number of girls: "))
boys = int(input("Provide the number of boys: "))

sum = girls + boys

if girls == boys and sum > 20:
    print("The party is exellent!")
elif not girls == boys and sum > 20:
    print("Quite cool party")
elif girls == 0:
    print("Sausage party")
elif sum < 20:
    print("Average party...")