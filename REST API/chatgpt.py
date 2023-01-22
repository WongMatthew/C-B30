from flask import Flask, request, jsonify
from revChatGPT.ChatGPT import Chatbot
import json

app = Flask(__name__)
config = json.load(open("config.json"))
chatbot = Chatbot(config)

@app.route('/chat', methods=['POST'])
def chat():
    request_data = request.get_json()
    message = request_data['message']
    response = chatbot.get_response(message)
    return jsonify(response)

@app.route('/ask', methods=['POST'])
def ask():
    request_data = request.get_json()
    message = request_data['message']
    response = chatbot.ask(message, conversation_id, parent_id)
    return jsonify(response)

if __name__ == '__main__':
    app.run()