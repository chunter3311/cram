from dotenv import load_dotenv

load_dotenv()

from app import app, db
from app.models import User, Deck, Flashcard

with app.app_context():
  db.drop_all()
  db.create_all()

  demo = User(username = 'demo', email = 'demo@demo.com', password='password')
  demo_user_new_deck = Deck(title='Python', isMastered=False, userId=1)
  demo_user_flashcard = Flashcard(question='What is Python?', answer="A high-level general-purpose programming language.", confidence=0, userId=1, deckId=1)
  demo_user_new_deck2 = Deck(title='Javascript', isMastered=False, userId=1)
  demo_user_flashcard_2 = Flashcard(question='What is Javascript?', answer="An object-oriented computer programming language commonly used to create interactive effects within web browsers.", confidence=0, userId=1, deckId=2)
  demo_user_new_deck3 = Deck(title='Docker', isMastered=False, userId=1)
  demo_user_flashcard = Flashcard(question='What is Docker?', answer="A set of products that use OS-level virtualization to deliver software in packages called containers.", confidence=0, userId=1, deckId=3)



  db.session.add(demo)
  db.session.add(demo_user_new_deck)
  db.session.add(demo_user_new_deck2)
  db.session.add(demo_user_new_deck3)
  db.session.add(demo_user_flashcard)
  db.session.add(demo_user_flashcard_2)
  db.session.add(demo_user_flashcard_3)


  db.session.commit()
