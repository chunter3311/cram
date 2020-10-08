from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, IntegerField
from wtforms.validators import InputRequired, Length, Email


class LoginForm(FlaskForm):
    email_or_username = StringField("Email", validators=[InputRequired("Please provide a valid email or username.")])
    password = PasswordField("Password", validators=[InputRequired("Please provide a valid password.")])

class SignUpForm(FlaskForm):
    username = StringField("Username", validators=[InputRequired("Please provide a valid username.")])
    email = StringField("Email", validators=[InputRequired("Please provide a valid email."), Email("Please provide a valid email.")])
    password = PasswordField("Password", validators=[InputRequired("Please provide a valid password.")])

class DeckForm(FlaskForm):
    title = StringField("Title", validators=[InputRequired("Deck names must be at least one character long")])
    isMastered = BooleanField("isMastered")
    userId = IntegerField("UserId")