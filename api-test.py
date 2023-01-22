import requests

response = requests.post("http://127.0.0.1:5000/prompt", json={'message': 'Hello'})
response.raise_for_status()  # raises exception when not a 2xx response
print(response.json())
