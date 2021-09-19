from flask import Flask, jsonify, request
from pymongo import MongoClient
from bson.json_util import loads
import pymongo
import requests
import json
from bson import json_util

app = Flask(__name__)

client = MongoClient("mongodb+srv://Richinbk:DzIMGBugcZjdMofB@searches.llyga.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = client.History
searches = db.searches




@app.route("/")
def hello():
    return 'abcd'

@app.route("/hello")
def connect():
    return "Hello from Server"

@app.route("/search/<query1>")
def search(query1):
    print(query1)
    thisList = []

    if(query1 == ""):
        return jsonify(thisList)
    else:
        apiCall = 'https://api.thecatapi.com/v1/breeds/search?q={}'
        apiCall = apiCall.format(query1)

        
        req = requests.get(apiCall, headers={'x-api-key':'d309c8b6-cead-41f5-a176-afcc44ad1658'})
        catJson = json.loads(req.content)

        for x in catJson:
            thisList.append(x['name'])

        return jsonify(thisList)

@app.route("/update_search/", methods=['GET','POST'])
def update_search():
    #print(request.json)
    x = {
        "name": request.json['name'],
        "url": request.json['url'],
        "searches": 1
    }
    update_search(x)
    return ""

@app.route("/most_searched/<amount>", methods=['GET','POST'])
def search_history(amount):
    x = most_searched(int(amount))
    return x



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
    
# DB functions refactor into new file later
# 

def update_search(cList):
    #check if entry already exists
    #if entry doesnt exist create
    #if entry does exist add search +=1
    name = cList['name']

    check = searches.find_one({"name": name})

    if(str(check) == "None"):
        searches.insert_one(cList)
    else:
        temp = int(check['searches']) + 1
        searches.update_one({"name":name}, {"$set": {"searches": temp}}) 

def most_searched(num):
    x = []
    y = []

    for post in searches.find().sort('searches', pymongo.DESCENDING):
        x.append(post)
    
    for index in range(num):
        y.append(x[index])
    
    return json_util.dumps(y)



    

    