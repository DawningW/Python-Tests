from copy import deepcopy
from typing import Dict, Any
from pix2text import Pix2Text
from PIL import Image
from flask import Flask, request
from pydantic import BaseModel

app = Flask(__name__)
P2T = Pix2Text()

class OcrResponse(BaseModel):
    status_code: int = 200
    results: Dict[str, Any] = None

    def dict(self, **kwargs):
        the_dict = deepcopy(super().dict())
        return the_dict

@app.route("/")
def index():
    return {"message": "Welcome to Pix2Text Server!"}

@app.route("/pix2text", methods=["POST"])
def ocr():
    f = request.files["image"]
    if f.filename == "":
        return OcrResponse(status_code=400).dict()
    image = Image.open(f).convert("RGB")
    outs = P2T.recognize(image)
    text = '\n'.join([out["text"] for out in outs])
    return OcrResponse(results={"text": text}).dict()
