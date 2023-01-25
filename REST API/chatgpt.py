from flask import Flask, request, jsonify
from revChatGPT.ChatGPT import Chatbot
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)
config = json.load(open("config.json"))
chatbot = Chatbot(config)

# @app.route('/ask', methods=['POST'])
# def ask():
#     request_data = request.get_json()
#     print(request_data['user_input'])
#     return jsonify({"response" : "hello"})

@app.route('/ask', methods=['POST'])
def ask():
    request_data = request.get_json()
    conversation_id = request_data['conversation_id']
    parent_id = request_data['parent_id']
    user_input = request_data['user_input']
    print(user_input)
    print(conversation_id)
    print(parent_id)
    response = chatbot.ask(user_input, None, None)
    print(response)
    print("hello6")
    message = "balh blah"   
    return jsonify({"response": "XXXXXX"})

'''
fix the conversation_id and parent_id

supposed to be None

https://prnt.sc/_0B7zerdbKyd
'''

# @app.route('/ask', methods=['POST'])
# def ask():
#     request_data = request.get_json()
#     conversation_id = request_data['conversation_id']
#     parent_id = request_data['parent_id']
#     user_input = request_data['user_input']
#     # response = chatbot.ask(user_input, conversation_id, parent_id)
#     response = chatbot.ask(user_input, None, None)
#     message = response.get('message')   
#     return jsonify({"response": message})

if __name__ == '__main__':
    app.run()