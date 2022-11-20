import {
  getIndex,
  getLastGameDate,
  getNextGameDate,
  getWordOfDay,
} from './words'

describe('solutionIndex', () => {
  test('last game date', () => {
    expect(getLastGameDate(new Date(2022, 11, 17))).toEqual(
      new Date(2022, 11, 17)
    )
    expect(getLastGameDate(new Date(2022, 11, 18))).toEqual(
      new Date(2022, 11, 18)
    )
    expect(getLastGameDate(new Date(2022, 11, 18, 15, 42, 0))).toEqual(
      new Date(2022, 11, 18)
    )

    expect(getLastGameDate(new Date(2022, 11, 23, 15, 42, 0))).toEqual(
      new Date(2022, 11, 23)
    )

    expect(getLastGameDate(new Date(2022, 11, 24))).toEqual(
      new Date(2022, 11, 24)
    )
    expect(getLastGameDate(new Date(2022, 11, 25))).toEqual(
      new Date(2022, 11, 25)
    )
    expect(getLastGameDate(new Date(2022, 11, 25, 15, 42, 0))).toEqual(
      new Date(2022, 11, 25)
    )
  })

  test('next game date', () => {
    expect(getNextGameDate(new Date(2022, 11, 17))).toEqual(
      new Date(2022, 11, 18)
    )
    expect(getNextGameDate(new Date(2022, 11, 18))).toEqual(
      new Date(2022, 11, 19)
    )
    expect(getNextGameDate(new Date(2022, 11, 18, 15, 42, 0))).toEqual(
      new Date(2022, 11, 19)
    )

    expect(getNextGameDate(new Date(2022, 11, 23, 15, 42, 0))).toEqual(
      new Date(2022, 11, 24)
    )

    expect(getNextGameDate(new Date(2022, 11, 24))).toEqual(
      new Date(2022, 11, 25)
    )
    expect(getNextGameDate(new Date(2022, 11, 25))).toEqual(
      new Date(2022, 11, 26)
    )
    expect(getNextGameDate(new Date(2022, 11, 25, 15, 42, 0))).toEqual(
      new Date(2022, 11, 26)
    )
  })

  test('index', () => {
    expect(getIndex(new Date(2022, 10, 20))).toEqual(0)

    expect(getIndex(new Date(2022, 11, 17))).toEqual(27)
    expect(getIndex(new Date(2022, 11, 18))).toEqual(28)
    expect(getIndex(new Date(2022, 11, 18, 15, 42, 0))).toEqual(28)

    expect(getIndex(new Date(2022, 11, 23, 15, 42, 0))).toEqual(33)

    expect(getIndex(new Date(2022, 11, 24))).toEqual(34)
  })

  test('word of the day', () => {
    expect(() => getWordOfDay(-1)).toThrowError('Invalid index')
    expect(getWordOfDay(0)).toEqual('KISS')
    expect(getWordOfDay(1)).toEqual('RAIN')
  })
})
