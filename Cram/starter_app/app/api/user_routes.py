from flask import Blueprint, jsonify, request, make_response
from app.models import db, User, Deck
from app.forms import SignUpForm
from werkzeug.datastructures import MultiDict

user_routes = Blueprint('users', __name__)


@user_routes.route('/', methods=["GET"])
def index():
    response = User.query.all()
    return {"users": [user.to_dict() for user in response]}


@user_routes.route('/', methods=["POST"])
def new():
    data = MultiDict(mapping=request.json)
    print(data)
    form = SignUpForm(data)
    print(form.data)
    if form.validate():
        if User.query.filter(User.email == data["email"]).first() is None:
            newUser = User(
              username=data["username"], 
              email=data["email"], 
              password=data["password"])
            db.session.add(newUser)
            db.session.commit()

            # newDeck = Deck(title='My Deck', isMastered=False, userId=newUser.to_dict()["id"])
            # db.session.add(newDeck)
            # db.session.commit()

            user_dict = newUser.to_dict()
            return {user_dict["id"]: user_dict}
        else:
            res = make_response(
              {"errors": ["A user with that email already exists"]}, 401)
            return res
    else:
        errorset = set()
        for error in form.errors:
            errorset.add(form.errors[error][0])
        errorlist = list(errorset)
        res = make_response({"errors": errorlist}, 401)
        return res


@user_routes.route('/<int:user_id>')
def get_user_info(user_id):
    user = User.query.get(user_id)
    return user.to_dict()


@user_routes.route('/<int:user_id>/decks', methods=["GET"])
def get_user_decks(user_id):
  decks = Deck.query.filter(Deck.userId == user_id).all()
  deck_dict = dict()
  for deck in decks:
    deck_dict[deck.to_dict()["id"]] = deck.to_dict()
  return deck_dict