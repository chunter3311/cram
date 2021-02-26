# Cram
*By Cole Hunter - [Visit Cram](https://cram-flashcards.herokuapp.com/)*

**Table of Contents**
* [Cram at a Glance](#cram-at-a-glance)
* [Application Architecture & Technologies Used](#application-architecture) 
* [Frontend Overview](#frontend-overview)
* [Backend Overview](#backend-overview)
* [Conclusion & Next Steps](#conclusion-and-next-steps)

## Cram at a Glance
Cram is a fullstack app for studying flashcards. Users can create their own decks of flashcards and save them to the database. Flashcards are read from the database and rendered with React components.

##### Studying Flashcards
![Cram gameplay](/readme-resources/cram-demo.gif)

## Application Architecture
The majority of the application logic occurs within front end's [Redux](https://redux.js.org/) store. Cram uses plain CSS for styling components. 
The backend serves the frontend, responds to frontend requests, and fetches data from the PostgreSQL database.

## Frontend Overview
Cram is very frontend heavy application. Below are the frontend technologies that make this application possible. 

### Frontend Technologies Used:
#### React
At its core, Cram is a React application. React components were a natural choice for rendering the flashcards of a deck, as they allowed displaying different cards without reloading the page.

```jsx
function Study(props) {
    const deckIdNumb = parseInt(props.match.params.deckId.split("").slice(5).join(""));
    const deck = useSelector(state => Object.values(state.entities.decks).filter((deck) => deck.id === deckIdNumb));
    const flashcards = useSelector(state => Object.values(state.entities.flashcards).filter((flashcard) => flashcard.deckId === deckIdNumb));
    const lastIndex = flashcards.length - 1;
    const [firstCard, setFirstCard] = useState(false);

    if (!firstCard) {
        setTimeout(function(){
            const card = document.getElementById('flashcard-0');
            card.classList.remove(styles.hide);
            setFirstCard(true);
         }, 0);
    }

    return (
        <main>
            <h1>Now Studying: {deck[0].title}</h1>
            {flashcards.map((flashcard, i) => {
                return (
                    <StudyFlashcard flashcard={flashcard} index={i} lastIndex={lastIndex} key={`flashcard-${i + 1}`} />
                )
            })}
        </main>
    );
}

const StudyFlashcard = ({ flashcard, index, lastIndex }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const question = flashcard.question;
    const answer = flashcard.answer;
    const [confidence, setConfidence] = useState("");
    const flashcardId = flashcard.id;
    const revealAnswer = () => {
        const answerEl = document.getElementById(`answer-${flashcard.id}`);
        answerEl.classList.remove(styles.hide);
    }

    const handleClick = async (event) => {
        event.preventDefault();
        const res = await dispatch(updateUserFlashcard(question, answer, confidence, flashcardId));

        if (res.ok) {
            const card = document.getElementById(`flashcard-${index}`);
            card.classList.add(styles.hide);
            if (index < lastIndex) {
                const nextCard = document.getElementById(`flashcard-${index + 1}`);
                nextCard.classList.remove(styles.hide);
            } else {
                history.push('/decks');
            }
            return;
        }
    }

    return (
        <div onClick={revealAnswer} id={`flashcard-${index}`} className={`${styles.study_deck_modal_container} ${styles.hide}`}>
            <div className={styles.study_deck_modal_wrapper}>
                <h3 className={styles.study_deck_modal_question}>{question}</h3>
                <div id={`answer-${flashcard.id}`} className={`${styles.study_deck_modal_answer_wrapper} ${styles.hide}`}>
                    <h3 className={styles.study_deck_modal_answer}>{answer}</h3>
                    <div className={styles.confidence_wrapper}>
                        <h4 className={styles.study_deck_modal_text}>How well do you know this?</h4>
                        <form className={styles.confidence_form} onSubmit={handleClick} action="" method="" style={{ display: "flex", flexDirection: "row", justifyContent: "center", padding: "0 25px 0" }}>
                            <input onClick={() => setConfidence(1)} type="submit" value="Not at all" />
                            <input onClick={() => setConfidence(2)} type="submit" value="Somewhat" />
                            <input onClick={() => setConfidence(3)} type="submit" value="Perfectly" />
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}
```

#### Redux
[Redux](https://redux.js.org/) and the [react-redux](https://react-redux.js.org/) library were used to manage application state and make fetch requests to the server for data. 

All flashcard information is fetched on page load and kept in the Redux store. While this expensive operation lengthens the initial load time, it also allows for a snappy experience after that load.

Redux also allows for a lot of extendibility if new features are to be implemented.

#### CSS
Cram uses pure CSS for styling.

## Backend Overview
Cram uses an Express server with PostgreSQL as the database. Compared to the frontend, the backend of Cram is fairly simple, with the server sending the front end to the client, receiving requests, and sending data to the frontend. Below are the backend technologies used with some notes regarding their implementation. 

### Backend Technologies Used
#### ExpressJS
[Express](https://expressjs.com/) was the natural choice for Cram's server-side framework. The minimalism of Express lent itself to the very light-weight responsibilities of Cram's server. The server is just a couple of routes and a connection to the database, with a few utilities to facilitate this. 

#### PostgreSQL
My system for database management.

#### SQLAlchemy, for using Python SQL
#### Alembic, for database migrations
#### Flask, for handling web server calls
#### Flask-Login, for user session management with Flask
#### Flask-CORS, for handling Cross Origin Resource Sharing
#### Flask-WTF, for integrating Flask and WTForms
#### Flask-Migrate, for handling Alembic database migrations
#### Gunicorn, a WSGI to run my Python applications
#### Werkzeug, to hash passwords and perform type conversions
#### WTForms, for form validations

## Conclusion and Next Steps
Developing Cram challenged me to use the foundational skills I've aquired to create a simple, yet effective React application.

Moving forward, I have plans to add the following features:
- Full CRUD functionality on flashcards
