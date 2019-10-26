import geocoder
from geopy import distance

def locate(loc):
    g = geocoder.google(loc)
    c1 = g.latlng
    return c1
    
def getDistance(a,b):
    return distance.distance(a,b).miles
