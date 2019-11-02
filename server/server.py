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
    address = request.args.get('address')
    target_coord = googlegeo.locate(address)

    dog_coordinates = incident.get_dog_coordinates()

    distances = get_distances(target_coord, dog_coordinates) 

    # Sort by the second value of each tuple.
    distances.sort(key=lambda x: x[1])

    # Get indices only.
    indices = [dist[0] for dist in distances]

    # Pick nearest 10.
    count = 0
    nearest10 = []
    for idx in indices:
        if count >= 10:
            break
        c = dog_coordinates[idx]
        if c[0] or c[1] is not None:
            nearest10.append({"lat": c[0], "long": c[1]})
            count += 1

    return jsonify(
        targetCoordinate={'lat': coord[0], 'long': coord[1]},
        nearestCoordinates=nearest10,
    )


if __name__ == '__main__':
    app.run()
