from flask import Flask, request, jsonify
from revChatGPT.ChatGPT import Chatbot
from flask_cors import CORS
import json
import openai

app = Flask(__name__)
CORS(app)
openai.api_key = json.load(open("config.json"))["openai_api_key"]

@app.route("/completion", methods=["POST"])
def completion():
    prompt = request.json.get("prompt", "")
    temperature = request.json.get("temperature", 0.7)
    max_tokens = request.json.get("max_tokens", 256)
    top_p = request.json.get("top_p", 1)
    frequency_penalty = request.json.get("frequency_penalty", 0)
    presence_penalty = request.json.get("presence_penalty", 0)

    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=prompt,
        temperature=temperature,
        max_tokens=max_tokens,
        top_p=top_p,
        frequency_penalty=frequency_penalty,
        presence_penalty=presence_penalty
    )

    return jsonify(response)

if __name__ == "__main__":
    app.run()