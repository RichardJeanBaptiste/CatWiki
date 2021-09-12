import requests
import json


# req = requests.get('https://api.thecatapi.com/v1/breeds/search?limit=5&name=American%20Bobtail',headers={'x-api-key':'d309c8b6-cead-41f5-a176-afcc44ad1658'})

# catJson = json.loads(req.content)


# print(catJson)


# apiCall = 'https://api.thecatapi.com/v1/breeds/search?limit=5&q={}'.format(name)

'''
imageCall = 'https://api.thecatapi.com/v1/images/search?limit=5&name=Aegean'
imageReq = requests.get(imageCall, headers={'x-api-key':'d309c8b6-cead-41f5-a176-afcc44ad1658'})
imageJson = json.loads(imageReq.content)

print("--------------------------------------------")

print(imageJson)
'''

x = {
    #"image_id": "3qp",
    "value": "1"
}

req = requests.post('https://api.thecatapi.com/v1/votes/?image_id=3qp',headers={'x-api-key':'d309c8b6-cead-41f5-a176-afcc44ad1658'}, data=x)
print(req.text)











