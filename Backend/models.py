from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# User Model (Admin, Politician, Audience)
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(20), nullable=False)  # Can be "admin", "politician", or "audience"

# Achievement Model (Politicians upload their achievements)
class Achievement(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    politician_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=False)
    date_posted = db.Column(db.DateTime, default=db.func.current_timestamp())
