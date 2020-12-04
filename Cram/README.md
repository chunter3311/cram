# Flask React Project
cd Cram/starter_app
pipenv run flask run

cd Cram/client
npm start
## Getting started

1. Clone this repository
2. Create a **.env** file based on the example with proper settings for your development environment
3. Follow instructions in the [`starter_app/README.md`](./starter_app/README.md) to setup your development Back-End.
4. Follow instructions in the [`client/README.md`](./client/README.md) to set up your development Front-End.

## Deploying to Heroku
### Prepping Your Heroku Project
1. Create a new project on your Heroku Dashboard.
2. Under Resources click "Find more add-ons" and add the add on called "Heroku Postgres".
3. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line) if you haven't already.
4. Add any Config Vars to your heroku app, either on the Heroku CLI, or on the heroku-app dashboard's Settings tab.

### Prepping Your React App:
1. Run `npm run build` in your React app root folder. 
    * This will build the static files for your React app. 
    * In explorer, copy client/build files, replace contents of starter_app/app/static


### Prepping your Flask App:
1. Enter your pipenv: `pipenv shell`
1. Update your requirements.txt with all of the packages installed in the environemt: `pip freeze > requirements.txt`


### Pushing your container

1. Login to heroku: `heroku login`
2. Login to the heroku container registry: `heroku container:login`
3. CD into `starter_app`
cd \\wsl$\Ubuntu\home\cole\aa\projects\Cram\Cram\starter_app
3. Remove Previous Image `docker image rm cram_build`
4. Create Image to Push to Heroku `docker build -t cram_build .`
5. Push Image to Heroku Docker Repo `docker tag cram_build registry.heroku.com/cram-flashcards/web`
6. Run Container from Heroku Docker Repo `docker push registry.heroku.com/cram-flashcards/web`
7. Release your docker container to heroku: `heroku container:push web -a cram-flashcards`
8. Seed your database: `heroku run -a cram-flashcards python -m database`
heroku container:release web release
7. Profit.


