from flask import Flask, jsonify, request
app = Flask(__name__)

@app.route('/chatbot', methods=['POST'])
def chatbot():
    data = request.get_json()
    session_token = data.get("session_token")
    conversation_id = data.get("conversation_id")
    parent_id = data.get("parent_id")

    chatbot = Chatbot({ "session_token": session_token }, conversation_id, parent_id)
    prompt = data.get("prompt")
    response = chatbot.ask(prompt, conversation_id, parent_id)

    return jsonify(response)
