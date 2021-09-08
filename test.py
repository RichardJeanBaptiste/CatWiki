import requests
import json


req = requests.get('https://api.thecatapi.com/v1/breeds/search?q=ame')

catJson = json.loads(req.content)



for x in catJson:
    print(x['name'])