import { AsyncStorage } from "react-native";
import { initialDecks } from "./initialData";
import _ from "lodash";
const DECKS_STORAGE_KEY = "decks";

export function addDeck(deckTitle) {
  return AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [deckTitle]: {
        title: deckTitle,
        questions: []
      }
    })
  );
}

export function getCards(deckTitle) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(
    decks => JSON.parse(decks)[deckTitle]["questions"]
  );
}
export function getDeckInfoByName(deckTitle) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(result => {
    const parsedObj = JSON.parse(result);
    const deck = _.get(parsedObj, deckTitle);
    return {
      title: deckTitle,
      numOfCards: _.get(deck, "questions").length || 0
    };
  });
}
export function initializeStorage() {
  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(initialDecks));
}

export async function getAllDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(JSON.parse);
}

export function addQuestion(deckTitle, questionObj) {
  getAllDecks().then(decks => {
    decks[deckTitle]["questions"] = _.get(
      _.get(decks, deckTitle),
      "questions"
    ).concat(questionObj);
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
  });
}
