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
isBusy = False

@app.route("/chat", methods=["POST"])
def chat():
    global isBusy
    if isBusy:
        return jsonify({"code": 429, "msg": "ChatGPT正忙"})
    try:
        isBusy = True
        prompt = request.form.get("prompt")
        data = chatbot.get_chat_response(prompt)
        return jsonify({"code": 0, "msg": "成功", "data": data})
    except Exception as e:
        print(e)
        return jsonify({"code": 500, "msg": str(e)})
    finally:
        isBusy = False

@app.route("/reset", methods=["GET"])
def reset():
    chatbot.reset_chat()
    return jsonify({"code": 0, "msg": "成功"})
