from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from models import User, db

auth = Blueprint('auth', __name__)

# User Registration Route
@auth.route('/register', methods=['POST'])
def register():
    data = request.json
    new_user = User(username=data['username'], email=data['email'], password=data['password'], role=data['role'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": "User registered successfully"}), 201

# User Login Route
@auth.route('/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(email=data['email']).first()
    if not user or user.password != data['password']:
        return jsonify({"error": "Invalid credentials"}), 401
    access_token = create_access_token(identity={"username": user.username, "role": user.role})
    return jsonify({"token": access_token, "role": user.role})
