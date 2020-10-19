from flask import Flask, render_template
from flask_socketio import SocketIO
import threading
from time import time, sleep
import atexit

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

t = threading.Thread()

@socketio.on('my event')
def handle_my_custom_event(json):
    print('received json: ' + str(json))


def ticker():
    while True:
        sleep(1)
        #print(time())
        try:
            socketio.emit('bala', {'time': time()})
        except:
            print("error")

def interrupt():
    global t
    t.cancel()


@app.route('/')
def hello_world():
    return render_template("index.html")

t = threading.Timer(1.0, ticker)
t.start()

atexit.register(interrupt)