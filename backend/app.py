from flask import Flask, send_from_directory, jsonify
import os

app = Flask(__name__, static_folder='static/react', static_url_path='')


# ── API routes (keep all original logic here) ─────────────────────────────────

@app.route('/api/health')
def health():
    return jsonify({'status': 'ok'})


# Add your original API endpoints below this line.
# Example: data endpoints that feed the dashboard
# @app.route('/api/data')
# def get_data():
#     ...


# ── Serve React for all non-API routes ───────────────────────────────────────

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_react(path):
    """Serve React build for all frontend routes (SPA)."""
    static_dir = app.static_folder
    # If a real file exists in the build (e.g. assets/index.js), serve it
    if path and os.path.exists(os.path.join(static_dir, path)):
        return send_from_directory(static_dir, path)
    # Otherwise serve index.html and let React Router handle it
    return send_from_directory(static_dir, 'index.html')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
