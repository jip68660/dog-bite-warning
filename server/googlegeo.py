import geocoder
from geopy import distance


def locate(address):
    """Return coordicate of given address."""
    g = geocoder.google(address)
    return g.latlng
    

def get_distance(c1, c2):
    """Return distance between two coordinates."""
    return distance.distance(c1, c2).miles
