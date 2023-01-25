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
    print("hello1")
    request_data = request.get_json()
    print("hello2")
    conversation_id = request_data['conversation_id']
    print("hello3")
    parent_id = request_data['parent_id']
    print("hello4")
    user_input = request_data['user_input']
    print("hello5")
    print(user_input)
    print(conversation_id)
    print(parent_id)
    response = chatbot.ask(user_input, None, None)
    print(response)
    print("hello6")
    message = "balh blah"   
    return jsonify({"response": "XXXXXX"})

if __name__ == '__main__':
    app.run()