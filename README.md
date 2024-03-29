    # MobileFlashcards

    This is the third project as per the Udacity's React Nanodegree program, which focus on developing a mobile apps utilizing React Native framework.

This README.md is divided into three sections: <br/>

Installation & Run Instructions<br />>
Tested Platform & Notes<br/>
Thought Processes on the Project<br/>
Udacity's Project Overview (as copied from their site) <br/>

## Installation & Run Instructions

The following commands will install the packages and then run the app:

1. `npm install`
2. `npm start`

## Tested Platform & Notes

The mobile has been tested on iOS platform using my personal iPhone. No emulator or Android device is used due to reason that I cannot access or afford one.

The local notification system is scheduled to be triggered by the next day on noon.

## Thought Processes on the Project

This has been a fun project. So many things have been learned: stack & tab navigation, using Expo to test, styled components, animation, local notification, permissions, and AsyncStorage. In previous project, I've learned how to use Redux for state management, and after this project, I can understand the frustrations when the Redux is not implemented. Redux is excellent for centralized state management. However, it's not enough if the data is lost once a user leaves or closes the app. AsyncStorage provides the support for the data to be persistent.

There were challenges. Working with AsyncStorage was difficult because of how different ES6 was when working with JSON objects. Navigation was another for passing the values to a child or sibling component. Testing within the limited set of networks proves one of the most difficult; after jumping all of the hoops to resolve the security and proxy issues my job has, I come back to my home and push forward onto the end of this project.

Styling the components using the Styled Components library, AwesomeButton borrowed from react-native-really-awesome-button library, and animation had taken me a while to be comfortable with them. Once I established the StyledComponents file as a global space for reusability, the rest just rolled in. I admitted that I was glad to hold the styling and animation for last because when the finishing line was in sight, this part of training made the whole thing more fun and memorable.

## Udacity's Project Overview

Project Overview
For the UdaciCards project, you will build a mobile application (Android or iOS - or both) that allows users to study collections of flashcards. The app will allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

Why this project?
This project encompasses the fundamental aspects of building a native application including handling infinite lists, routing, and user input. By building this project, you will gain an understanding of how to use React Native to build an iOS and Android application.

Specification
You'll create your project using create-react-native-app. There will be no starter code that you need to download.

The specification provided in this rubric is the minimum required for this project. You may extend your project however you'd like.

Specific Requirements

- Use create-react-native-app to build your project.
- Allow users to create a deck which can hold an unlimited number of cards.
- Allow users to add a card to a specific deck.
- The front of the card should display the question.
- The back of the card should display the answer.
- Users should be able to quiz themselves on a specific deck and receive a score once they're done.
- Users should receive a notification to remind themselves to study if they haven't already for that day.

###Views
Your application should have, at a minimum, five views.

Deck List View (Default View)

- displays the title of each Deck
- displays the number of cards in each deck

Individual Deck View

- displays the title of the Deck
- displays the number of cards in the deck
- displays an option to start a quiz on this specific deck
- An option to add a new question to the deck

Quiz View

- displays a card question
- an option to view the answer (flips the card)
- a "Correct" button
- an "Incorrect" button
- the number of cards left in the quiz
- Displays the percentage correct once the quiz is complete

New Deck View

- An option to enter in the title for the new deck
- An option to submit the new deck title

New Question View

- An option to enter in the question
- An option to enter in the answer
- An option to submit the new question

### Data

We'll use AsyncStorage to store our decks and flashcards. Redux is optional for this project.
