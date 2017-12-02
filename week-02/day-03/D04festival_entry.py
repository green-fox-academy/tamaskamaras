
watchlist = []



queue = [
	{ 'name': 'Amanda', 'alcohol': 10, 'guns': 1 },
	{ 'name': 'Tibi', 'alcohol': 0, 'guns': 0 },
	{ 'name': 'Dolores', 'alcohol': 0, 'guns': 1 },
	{ 'name': 'Wade', 'alcohol': 1, 'guns': 1 },
	{ 'name': 'Anna', 'alcohol': 10, 'guns': 0 },
	{ 'name': 'Rob', 'alcohol': 2, 'guns': 0 },
	{ 'name': 'Joerg', 'alcohol': 20, 'guns': 0 }
]

# Queue of festivalgoers at entry
# no. of alcohol units 
# no. of guns

# Create a security_check function that returns a list of festivalgoers who can enter the festival

# If guns are found, remove them and put them on the watchlist (only the names)
# If alcohol is found confiscate it (set it to zero and add it to security_alchol_loot) and let them enter the festival

def security_check(queue):
	admitteds = []
	security_alcohol_loot = 0
	for goers in queue:
		if goers['guns'] > 0:
			watchlist.append(goers['name'])
		if goers['guns'] == 0:
			admitteds.append(goers['name'])
		if goers['alcohol'] > 0:
			security_alcohol_loot += goers['alcohol']
			goers['alcohol'] = [0]

security_check(queue)
print("Admitted festivalgoers: ", security_check(queue))

for dics in queue:
	print(dics)

print("Confiscated alcohol: ", security_alcohol_loot)
print("Watchlist: ", watchlist)
