import requests

url = 'http://127.0.0.1:5000/ask'
data = {'user_input': 'ask me these questions one by one and have a conversation with me about them: Modifying Rules And Assumptions What is the rule (or assumption) I live by that I would like to modify? How does this rule (or assumption) afect me in my day to day life?'}

response = requests.post(url, json=data)
print(response.json())
