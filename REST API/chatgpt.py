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
    request_data = request.get_json()
    conversation_id = request_data['conversation_id']
    parent_id = request_data['parent_id']
    user_input = request_data['user_input']
    response = chatbot.ask(user_input, conversation_id, parent_id)
    message = response['message'] 
    new_conversation_id = response['conversation_id']
    new_parent_id = response['parent_id']
    print("--------------------")
    print("Check:" + message, new_conversation_id, new_parent_id)
    print("--------------------")
    return jsonify({"response": message, "conversation_id": new_conversation_id, "parent_id": new_parent_id})

'''
fix the conversation_id and parent_id

supposed to be None

https://prnt.sc/_0B7zerdbKyd

^^ fixed!!

Note: on the FE, need to pass in conversation_id and parent_id as None for the API call, afterwards, 
save the conversation_id and parent_id from the response and pass it in for the next API call

FOLLOW UP NOTE: DONT ACTUALLY NEED TO SAVE THE CONVERSATION_ID AND PARENT_ID, JUST PASS IN NONE FOR THE FIRST CALL
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