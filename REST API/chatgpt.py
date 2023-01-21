from flask import Flask, request, jsonify

app = Flask(__name__)
chatbot = Chatbot(config, conversation_id=None)

@app.route('/chat', methods=['POST'])

# This is the function that will be called when the user sends a message to the chatbot
def chat():
    request_data = request.get_json()
    message = request_data['message']
    response = chatbot.get_response(message)
    return jsonify(response)

if __name__ == '__main__':
    app.run()