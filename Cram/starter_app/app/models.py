from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime

db = SQLAlchemy()


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now, nullable=False)
    flashcards = db.relationship('Flashcard', back_populates='user')
    decks = db.relationship('Deck', back_populates='user')
    


    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email
        }


class Flashcard(db.Model):
    __tablename__ = 'flashcards'

    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(255), default='Untitled', nullable=False)
    answer = db.Column(db.String(255), default='Untitled', nullable=False)
    confidence = db.Column(db.Integer, default=0, nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    deckId = db.Column(db.Integer, db.ForeignKey('decks.id'))
    isTrash = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.now, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now, nullable=False)
    user = db.relationship('User', back_populates='flashcards')
    deck = db.relationship('Deck')

    def to_dict(self):
        return {
            "id": self.id,
            "question": self.question,
            "answer": self.answer,
            "confidence": self.confidence,
            "userId": self.userId,
            "deckId": self.deckId,
            "isTrash": self.isTrash,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }


class Deck(db.Model):
    __tablename__ = 'decks'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(25), nullable=False)
    isMastered = db.Column(db.Boolean, nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now, nullable=False)
    user = db.relationship('User', back_populates="decks")
    __table_args__ = (db.UniqueConstraint('title', 'userId'), )

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "isMastered": self.isMastered,
            "userId": self.userId,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }