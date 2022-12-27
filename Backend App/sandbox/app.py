from flask import Flask, request
from flask_cors import CORS, cross_origin
import time
import base64
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/', methods=['GET', 'POST'])
@cross_origin()
def index():
    text = request.json['body']
    length = len(text)
    text = base64.b64decode(text).decode('utf8')
    count = 1000000
    for i in range(length):
        for j in range(length):
            count = count**(1/2)
    return ({"body": text})

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)
  