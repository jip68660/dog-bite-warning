import json

def openFile():
    with open('incidents.json', encoding= "utf-8") as json_file:
        data = json.load(json_file)
        return data

def getDogLocation():
    data = openFile()
    listofDogLocations = []
    for i in data['data']:
        listofDogLocations.append(i[-6][-4:-2])
    return listofDogLocations
        




