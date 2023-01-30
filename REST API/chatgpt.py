from flask import Flask, request, jsonify
from revChatGPT.ChatGPT import Chatbot
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)
config = json.load(open("config.json"))
chatbot = Chatbot(config)

@app.route('/ask', methods=['POST'])
def ask():
    # turns input data into a dictionary
    request_data = request.get_json()
    # get the conversation_id, parent_id, and user_input from the dictionary
    conversation_id = request_data['conversation_id']
    parent_id = request_data['parent_id']
    user_input = request_data['user_input']
    # get the response from the chatbot
    response = chatbot.ask(user_input, conversation_id, parent_id)
    # get the message from the response
    message = response['message'] 
    # get the new conversation_id and parent_id from the response
    new_conversation_id = response['conversation_id']
    new_parent_id = response['parent_id']
    # Testing to check for the correct conversation_id and parent_id
    print("--------------------")
    print("Check:" + message, new_conversation_id, new_parent_id)
    print("--------------------")
    # return the message, new conversation_id, and new parent_id
    return jsonify({"response": message, "conversation_id": new_conversation_id, "parent_id": new_parent_id})

'''
Note: on the FE, need to pass in conversation_id and parent_id as None for the API call, afterwards, 
save the conversation_id and parent_id from the response and pass it in for the next API call

FOLLOW UP NOTE: DONT ACTUALLY NEED 
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