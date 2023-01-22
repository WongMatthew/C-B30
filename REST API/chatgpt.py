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

# create a chat bot using rest api to chat with the user back and forth

# start the conversation by passing through an initial prompt to chat gpt rest api, such as: "ask me these questions one by one and have a conversation with me about them: Modifying Rules And Assumptions What is the rule (or assumption) I live by that I would like to modify? How does this rule (or assumption) affect me in my day to day life?"

# continue the conversation until the user is satisfied with the results using simple chat bot