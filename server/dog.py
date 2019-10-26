import loc
import address

# church ='1225 N Josey Ln, Carrollton, TX 75006'
church = '2500 TX-121, Euless, TX 76039'
c = address.locate(church)

dogLocations = loc.getDogLocation()

distance = []

for i in dogLocations:
   distance.append(address.getDistance(c,i))
distance.sort()
print(distance[0:10])
count = 0 
for num in distance[0:10]:
    if num < 10:
        count += 1
print(count)










