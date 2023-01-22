from flask import Flask, request
from revChatGPT.ChatGPT import Chatbot
import json

app = Flask(__name__)
config = json.load(open("config.json"))
chatbot = Chatbot(config)

@app.route('/ask', methods=['POST'])
def ask():
    user_input = request.json['user_input']
    conversation_id = request.json.get('conversation_id')
    parent_id = request.json.get('parent_id')
    response = chatbot.ask(user_input, conversation_id, parent_id)
    return response

if __name__ == '__main__':
    app.run()