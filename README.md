dog warning
---
Display nearby bite incidents of given street address.

*Data is provided by [Dalls Open Data][2].*

> I save you from rabies.

### Structure

This project is built with React and Flask.
Each application is currently deployed in Google Compute Engine.

This repository contains two applications:

- `ui`: React app, hosted on [jihoon.dev][0]
- `server` is a Flask app, hosted on [raykim.dev][1]

### Usage

Run the following in `ui` directory:
```bash
npm install
npm test
npm run
```

Run the following in `server` directory:
```bash
pip install -r requirements.txt
pytest
python server.py
```

### Contributors

[jihoon], [ray], [hyunchel]


[0]: https://dogwarning.jihoon.dev
[1]: https://dogwarning.raykim.dev
[2]: https://www.dallasopendata.com
[jihoon]: https://github.com/jip68660
[ray]: https://github.com/kimraymond825
[hyunchel]: https://github.com/hyunchel


