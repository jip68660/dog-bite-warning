from flask import Flask, escape, request, jsonify
import loc
import address as address2


app = Flask(__name__)

@app.route('/')
def getDogCount():
    address = request.args.get("address")
    c = address2.locate(address)
    dogLocations = loc.getDogLocation()
    distance = []

    for i in dogLocations:
         distance.append(address2.getDistance(c,i))
         distance.sort()
         count = 0
    for num in distance[0:10]:
        print(num)
        if num < 3:
           count += 1 
    return jsonify(dogCount = count)

if __name__ == '__main__':
    app.run()

