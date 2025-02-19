from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/reproduce', methods=['POST'])
def reproduce():
    user_input = request.json.get('input')
    return jsonify({"response": f"You entered: {user_input}"})

if __name__ == '__main__':
    app.run(debug=True, port=3000) # Ensure the port is set to 5000
