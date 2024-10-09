from json import load as load_json
from dotenv import load_dotenv
from os import environ, path
from ai21 import AI21Client

load_dotenv()

API_KEY = environ.get("AI21_KEY")

Client = AI21Client(api_key=API_KEY)

Upload_Folder = path.join(path.dirname(__file__), "..", "uploads")

Labels_Dict = load_json(open(path.join(Upload_Folder, "labels.json"), "r"))
