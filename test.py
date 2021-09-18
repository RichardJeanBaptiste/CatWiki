import requests
import json
from pymongo import MongoClient
import pymongo

client = MongoClient("mongodb+srv://Richinbk:DzIMGBugcZjdMofB@searches.llyga.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = client.test
posts = db.posts

'''
x = {
        "name": 'Rich',
        "url": "safaefa",
        "searches": 1
    }
    


posts.insert_one(x)


posts.update_one({"name":"Rich"}, {"$set": {"searches": 3}})
 
for post in posts.find().sort('searches', pymongo.DESCENDING):
    print(post)

'''

'''
for x in posts.find({"name":"Rich"}):
    print(x['searches'])
'''

test = {
    "name": "Pete",
    "url": "gokgokgog.com",
    "searches": 0,
}

def update_search(test):
    #check if entry already exists
    #if entry doesnt exist create
    #if entry does exist add search +=1
    name = test['name']

    check = posts.find_one({"name": name})

    if(str(check) == "None"):
        posts.insert_one(test)
    else:
        temp = int(check['searches']) + 1
        posts.update_one({"name":name}, {"$set": {"searches": temp}})
    

update_search(test)








