from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
import models
import threading # caso a gente utilize processamentos paralelos

load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/*":{"origins":"*"}})

# models.__init__(app) # descomentar depois de arrumar o __init__.py

from controllers.member import member_bp

app.register_blueprint(member_bp, url_prefix='/member')

if __name__ == '__main__':
    # Definindo o host para '0.0.0.0' para permitir conexões externas
    app.run(host='0.0.0.0', port=5000)