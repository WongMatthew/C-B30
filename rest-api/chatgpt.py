from flask import Flask, request, jsonify
from revChatGPT.ChatGPT import Chatbot
import json

app = Flask(__name__)
config = json.load(open("config.json"))
chatbot = Chatbot(config)

@app.route('/prompt', methods=['POST'])
def prompt():
    request_data = request.get_json()
    message = request_data['message']
    response = chatbot.get_response(message)
    json.dumps({"message"})
    return jsonify(response)

if __name__ == '__main__':
    app.run()