from flask import Flask, jsonify
import requests
import json

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
    thisList = []

    if(query == ""):
        return jsonify(thisList)
    else:
        apiCall = 'https://api.thecatapi.com/v1/breeds/search?q={}'
        apiCall = apiCall.format(query)

        
        req = requests.get(apiCall, headers={'x-api-key':'d309c8b6-cead-41f5-a176-afcc44ad1658'})
        catJson = json.loads(req.content)

        for x in catJson:
            thisList.append(x['name'])

        return jsonify(thisList)

@app.route("/find/<name>")
def find(name):
    print(name)
    try:
        thisList = []

        apiCall = 'https://api.thecatapi.com/v1/breeds/search?q={}'.format(name)
        req = requests.get(apiCall, headers={'x-api-key':'d309c8b6-cead-41f5-a176-afcc44ad1658'})
        catJson = json.loads(req.content)


        return jsonify(catJson)
    except:
        return "something broke"

@app.route("/images/<name>")
def getImage(name):
    try:
        imageCall = 'https://api.thecatapi.com/v1/images/search?limit=9&name={}'.format(name)
        imageReq = requests.get(imageCall, headers={'x-api-key':'d309c8b6-cead-41f5-a176-afcc44ad1658'})
        imageJson = json.loads(imageReq.content)

        return jsonify(imageJson)
    except TypeError:
        return "TypeError - Json loaded in wrong format"
    except:
        return "Something Broke"
    

    



    

    