import requests

url = "http://127.0.0.1:5000"

response = requests.post("http://127.0.0.1:5000/chat", json={'message': 'Hello'})
print(response.json())
