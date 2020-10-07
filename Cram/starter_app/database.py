from dotenv import load_dotenv

load_dotenv()

from app import app, db
from app.models import User

with app.app_context():
  db.drop_all()
  db.create_all()

  demo = User(username = 'demo', email = 'demo@demo.com', password='password')
  db.session.add(demo)
  db.session.commit()