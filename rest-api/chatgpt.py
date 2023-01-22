from revChatGPT.ChatGPT import Chatbot
from flask import Flask, jsonify, request
import json

app = Flask(__name__)
config = json.load(open("config.json"))
chatbot = Chatbot(config, conversation_id=None)

@app.route('/chatbot', methods=['GET'])
def prompt():
    response = chatbot.ask()
    data = request.get_json()
    session_token = data.get("session_token")
    conversation_id = data.get("conversation_id")
    parent_id = data.get("parent_id")

    chatbot = Chatbot({ "session_token": session_token }, conversation_id, parent_id)
    prompt = data.get("prompt")
    response = chatbot.ask(prompt, conversation_id, parent_id)

    return jsonify(response)

if __name__ == '__main__':
    app.run()