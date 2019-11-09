server
---

A queriable Flask web app, built on top of data from [Dallas Open Data][1].
Returns [JSON][1] all the time.

### Installation

Using `virtualenv` is recommended:
```bash
python -m venv venv
source ./venv/bin/activate
pip install -r requirements.txt
```

### Running

Try to run with `flask` CLI:
```bash
source ./venv/bin/activate
FLASK_APP=server.py flask run
```

If the above doesn't work:
```bash
source ./venv/bin/activate
python server.py
```

### Testing

`pytest` is used:

```bash
source ./venv/bin/activate
pytest # runs all tests
flake8 # for linting
```

### Deployment

Currently deployed in personal Google Compute Engine.


[0]: https://www.dallasopendata.com/City-Services/Dog-Bites-Incidents-Citywide/encv-4wkf
[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
