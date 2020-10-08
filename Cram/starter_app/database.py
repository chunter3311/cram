from dotenv import load_dotenv

load_dotenv()

from app import app, db
from app.models import User, Deck

with app.app_context():
  db.drop_all()
  db.create_all()

  demo = User(username = 'demo', email = 'demo@demo.com', password='password')
  demo_user_new_deck = Deck(title='Python', isMastered=False, userId=1)
  demo_user_new_deck2 = Deck(title='Javascript', isMastered=False, userId=1)
  demo_user_new_deck3 = Deck(title='Docker', isMastered=False, userId=1)

  db.session.add(demo)
  db.session.add(demo_user_new_deck)
  db.session.add(demo_user_new_deck2)
  db.session.add(demo_user_new_deck3)
  db.session.commit()