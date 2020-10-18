python3 -m venv venv

pip install -r requirements.txt

openssl req -x509 -newkey rsa:4096 -nodes -out cert.pem -keyout key.pem -days 365

export FLASK_APP=am_ar_overlay.py
flask run --host=0.0.0.0 --cert=cert.pem --key=key.pem