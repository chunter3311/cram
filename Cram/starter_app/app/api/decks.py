from flask import Blueprint, request
from app.models import db, Deck
from datetime import datetime

decks = Blueprint("decks", __name__)

@decks.route("/", methods=["POST"])
def new_deck():
    data = request.json
    deck = Deck(title=data['title'], userId=data['userId'], isMastered=data['isMastered'])
    db.session.add(deck)
    db.session.commit()
    return deck.to_dict()

@decks.route("/<int:deck_id>", methods=["PUT"])
def edit_deck(deck_id):
    data = request.json
    deck = Deck.query.get(deck_id)
    deck.title = data['title']
    deck.isMastered = data['isMastered']
    deck.updated_at = datetime.now()
    db.session.commit()
    return deck.to_dict()

@decks.route("/<int:deck_id>/update", methods=["PUT"])
def update_deck(deck_id):
    deck = Deck.query.get(deck_id)
    deck.updated_at = datetime.now()
    db.session.commit()
    return deck.to_dict()

@decks.route("/<int:deck_id>")
def get_deck():
    deck = Deck.query
    db.session.add(deck)
    db.session.commit()
    return deck.to_dict()