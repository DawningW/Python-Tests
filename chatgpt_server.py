import json
from flask import Flask, jsonify, request
from revChatGPT.revChatGPT import Chatbot

config = {
    #"proxy": "<HTTP/HTTPS_PROXY>",
    "email": "<YOUR_EMAIL>",
    "password": "<YOUR_PASSWORD>"
}

app = Flask(__name__)
chatbot = Chatbot(config, conversation_id=None)

@app.route("/", methods=["POST"])
def index():
    try:
        prompt = request.form.get("prompt")
        data = chatbot.get_chat_response(prompt)
        return jsonify({"code": 0, "msg": "³É¹¦", "data": data})
    except Exception as e:
        print(e)
        return jsonify({"code": 500, "msg": "Ê§°Ü"})
