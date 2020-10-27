from flask import Blueprint, request
from app.models import db, Flashcard, Deck
from datetime import datetime

flashcards = Blueprint("flashcards", __name__)

@flashcards.route("/", methods=["POST"])
def new_flashcard():
    data = request.json
    flashcard = Flashcard(question=data['question'], answer=data['answer'], confidence=data['confidence'], userId=data['userId'], deckId=data['deckId'])
    db.session.add(flashcard)
    db.session.commit()
    return flashcard.to_dict()

@flashcards.route("/<int:flashcard_id>", methods=["PUT"])
def update_flashcard(flashcard_id):
    data = request.json
    flashcard = Flashcard.query.filter(Flashcard.id == flashcard_id).first()
    flashcard.question = data['question']
    flashcard.answer = data["answer"]
    flashcard.confidence = data["confidence"]
    db.session.commit()
    return flashcard.to_dict()


@flashcards.route("/<int:flashcard_id>", methods=['PUT'])
def delete_flashcard(flashcard_id):
    flashcard = Flashcard.query.filter(Flashcard.id == flashcard_id).first()
    if not flashcard['isTrash']:
        flashcard['isTrash'] = True
        db.session.commit()


# @flashcards.route('/<int:flashcard_id>/move_to/<int:deck_id>')
# def move_flashcard(flashcard_id, deck_id):
#     flashcard = Flashcard.query.get(flashcard_id)
#     flashcard.deckId = deck_id
#     db.session.commit()
#     return flashcard.to_dict()
