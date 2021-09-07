from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello():
    return 'abcd'

@app.route("/hello")
def connect():
    return "Hello from Server"