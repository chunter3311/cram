from flask import Blueprint, request
from app.models import db, Flashcard
from datetime import datetime

flashcards = Blueprint("flashcards", __name__)

@flashcards.route("/", methods=["POST"])
def new_flashcard():
    data = request.json
    flashcard = Flashcard(question=data['question'], answer=data['answer'], userId=data['userId'], confidence=data['confidence'])
    db.session.add(flashcard)
    db.session.commit()
    return flashcard.to_dict()

@flashcards.route("/<int:flashcard_id>", methods=["PUT"])
def edit_flashcard(flashcard_id):
    data = request.json
    flashcard = Flashcard.query.get(flashcard_id)
    flashcard.question = data['question']
    flashcard.answer = data['answer']
    flashcard.confidence = data['confidence']
    flashcard.updated_at = datetime.now()
    db.session.commit()
    return flashcard.to_dict()

@flashcards.route("/<int:flashcard_id>/update", methods=["PUT"])
def update_flashcard(flashcard_id):
    flashcard = Flashcard.query.get(flashcard_id)
    flashcard.updated_at = datetime.now()
    db.session.commit()
    return flashcard.to_dict()

@flashcards.route("/<int:flashcard_id>")
def get_flashcard():
    flashcard = Flashcard.query
    db.session.add(flashcard)
    db.session.commit()
    return flashcard.to_dict()