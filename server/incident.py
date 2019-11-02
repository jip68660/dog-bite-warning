import json


def open_file(filename):
    """Read JSON file content as UTF8 encoding."""
    with open(filename, encoding='utf-8') as json_file:
        return json.load(json_file)


def get_dog_coordinates():
    """Return a list of all reported coordinates."""
    data = open_file('incidents.json')
    dog_coordinates = []
    for i in data['data']:
        dog_coordinates.append(i[-6][-4:-2])
    return dog_coordinates
