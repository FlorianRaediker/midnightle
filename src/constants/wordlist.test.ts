import { fail } from 'assert'
import { VALID_GUESSES } from "./validGuesses"

import { WORDS } from './wordlist'

describe('wordlist', () => {
  // You may not want the list of solutions to be unique. In that case, disable this test
  test('words are unique', () => {
    const uniqueWords = Array.from(new Set(WORDS))

    expect(WORDS.length).toEqual(uniqueWords.length)

    if (uniqueWords.length !== WORDS.length) {
      uniqueWords.forEach((w) => {
        const ww = WORDS.filter((x) => x === w)
        if (ww.length > 1) {
          fail(`The word ${w} is not unique.`)
        }
      })
    }
  })

  test("valid guess for each word length exists", () => {
    const validGuessLengths = new Set(VALID_GUESSES.map(validGuess => validGuess.length))

    for (let word of WORDS) {
      if (!validGuessLengths.has(word.length)) {
        fail(`word ${word} has length ${word.length}, but no valid guess with this length exists`)
      }
    }
  })
})
