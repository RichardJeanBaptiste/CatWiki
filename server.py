from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello():
    return 'abcd'

@app.route("/hello")
def connect():
    return "Hello from Server"

@app.route("/search/<query>")
def search(query):
    print(query)
    return str(query)