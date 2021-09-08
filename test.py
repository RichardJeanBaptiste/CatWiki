import requests
import json


req = requests.get('https://api.thecatapi.com/v1/breeds/search?q=ame')

catJson = json.loads(req.content)

thisList = []

for x in catJson:
    thisList.append(x['name'])

print(thisList)
