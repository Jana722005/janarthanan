from abilities import flask_app_authenticator
import logging
from datetime import datetime
from flask import render_template, redirect, url_for
from flask import current_app as app
from functools import wraps
from flask import request

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def register_routes(app):
    # Setup authentication for all routes
    auth_handler = flask_app_authenticator(
        allowed_domains=None,
        allowed_users=None,
        logo_path="https://storage.googleapis.com/lazy-icons/child-icon.webp",
        app_title="Screen Time Buddy",
        custom_styles=None,
        session_expiry=None
    )
    app.before_request(auth_handler)

    @app.route("/")
    def home_route():
        return render_template("home.html")

    @app.route("/profile")
    def profile_route():
        return render_template("profile.html")

    @app.route("/activities")
    def activities_route():
        return render_template("activities.html")

    @app.route("/auth")
    def auth_route():
        return auth_handler()