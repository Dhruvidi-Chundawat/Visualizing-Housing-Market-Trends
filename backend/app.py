from flask import Flask, send_from_directory, jsonify, redirect, session, url_for, request
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__, static_folder='static/react', static_url_path='')
app.secret_key = os.getenv('FLASK_SECRET_KEY', 'dev-secret-change-in-production')


# ── Dummy user database (replace with real DB later) ──────────────────────────
users = {
    "admin": {
        "password": "123456",
        "name": "Admin User",
        "email": "admin@example.com",
        "picture": ""
    }
}


# ── Auth routes ───────────────────────────────────────────────────────────────

@app.route('/api/auth/login', methods=['POST'])
def login():
    """Login with username and password."""
    
    data = request.json
    username = data.get("username")
    password = data.get("password")

    user = users.get(username)

    if not user or user["password"] != password:
        return jsonify({"error": "Invalid username or password"}), 401

    session['user'] = {
        'name': user['name'],
        'email': user['email'],
        'picture': user['picture']
    }

    return jsonify({"message": "Login successful", "user": session['user']})


@app.route('/api/auth/logout')
def logout():
    """Clear session and redirect to login."""
    session.clear()
    return redirect('/login')


@app.route('/api/auth/me')
def me():
    """Return current logged-in user, or 401 if not authenticated."""
    user = session.get('user')
    if not user:
        return jsonify({'error': 'Not authenticated'}), 401
    return jsonify(user)


# ── Other API routes ──────────────────────────────────────────────────────────

@app.route('/api/health')
def health():
    return jsonify({'status': 'ok'})


# ── Serve React for all non-API routes ───────────────────────────────────────

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_react(path):
    """Serve React build for all frontend routes (SPA)."""
    static_dir = app.static_folder
    if path and os.path.exists(os.path.join(static_dir, path)):
        return send_from_directory(static_dir, path)
    return send_from_directory(static_dir, 'index.html')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)