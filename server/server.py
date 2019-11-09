from flask import Flask, escape, request, jsonify
from flask_cors import CORS
import incident
import googlegeo

app = Flask(__name__)
CORS(app)
cache = {}


def get_distances(target_coord, dog_coordinates):
    key = target_coord
    if key in cache:
        return cache[key]
    distances = []
    for idx, coord in enumerate(dog_coordinates):
        distances.append((idx, googlegeo.get_distance(target_coord, coord)))
    cache[key] = distances
    return cache[key]


@app.route('/')
def get_dog_coordinates():
    address = request.args['address']
    target_coord = googlegeo.locate(address)
    target_coord = (target_coord[0], target_coord[1])

    dog_info = incident.get_dog_info()

    dog_coordinates = []
    dog_activity = []
    dog_date = []
    for i in dog_info:
        dog_coordinates.append(i[-6][-4:-2])
        dog_activity.append(i[10:12])
        dog_date.append(i[47])
    
    distances = get_distances(target_coord, dog_coordinates) 

    # Sort by the second value of each tuple.
    distances.sort(key=lambda x: x[1])

    # Get indices only.
    indices = [dist[0] for dist in distances]

    # Pick nearest 10.
    count = 0
    nearest10 = []
    listofactivity = []
    listofdate = []
    for idx in indices:
        if count >= 10:
            break
        c = dog_coordinates[idx]
        a = dog_activity[idx]
        if c[0] or c[1] is not None:
            nearest10.append({"lat": c[0], "long": c[1]})
        if a[0] or a[1] is not None:
            listofactivity.append({"subtype": a[0], "activity_priority": a[1]})
        listofdate.append(dog_date[idx])
        count += 1
 
        
    return jsonify(
        targetCoordinate={
            'lat': target_coord[0],
            'long': target_coord[1]
        },
        nearestCoordinates=nearest10,
        dogactivity = listofactivity,
        dogdate = listofdate
    )


if __name__ == '__main__':
    app.run()
