import os
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'This is Service Python, running in ' + str(os.getenv('FLASK_ENV')) + ' mode!'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
