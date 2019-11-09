from http import HTTPStatus


def test_400_on_missing_address(client):
    resp = client.get('/')
    resp.status_code == HTTPStatus.BAD_REQUEST.value
