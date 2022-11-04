import {
  getIndex,
  getLastGameDate,
  getNextGameDate,
  getWordOfDay,
} from './words'

describe('solutionIndex', () => {
  test('last game date', () => {
    expect(getLastGameDate(new Date(2022, 10, 17))).toEqual(
      new Date(2022, 10, 17)
    )
    expect(getLastGameDate(new Date(2022, 10, 18))).toEqual(
      new Date(2022, 10, 18)
    )
    expect(getLastGameDate(new Date(2022, 10, 18, 15, 42, 0))).toEqual(
      new Date(2022, 10, 18)
    )

    expect(getLastGameDate(new Date(2022, 10, 23, 15, 42, 0))).toEqual(
      new Date(2022, 10, 23)
    )

    expect(getLastGameDate(new Date(2022, 10, 24))).toEqual(
      new Date(2022, 10, 24)
    )
    expect(getLastGameDate(new Date(2022, 10, 25))).toEqual(
      new Date(2022, 10, 25)
    )
    expect(getLastGameDate(new Date(2022, 10, 25, 15, 42, 0))).toEqual(
      new Date(2022, 10, 25)
    )
  })

  test('next game date', () => {
    expect(getNextGameDate(new Date(2022, 10, 17))).toEqual(
      new Date(2022, 10, 18)
    )
    expect(getNextGameDate(new Date(2022, 10, 18))).toEqual(
      new Date(2022, 10, 19)
    )
    expect(getNextGameDate(new Date(2022, 10, 18, 15, 42, 0))).toEqual(
      new Date(2022, 10, 19)
    )

    expect(getNextGameDate(new Date(2022, 10, 23, 15, 42, 0))).toEqual(
      new Date(2022, 10, 24)
    )

    expect(getNextGameDate(new Date(2022, 10, 24))).toEqual(
      new Date(2022, 10, 25)
    )
    expect(getNextGameDate(new Date(2022, 10, 25))).toEqual(
      new Date(2022, 10, 26)
    )
    expect(getNextGameDate(new Date(2022, 10, 25, 15, 42, 0))).toEqual(
      new Date(2022, 10, 26)
    )
  })

  test('index', () => {
    expect(getIndex(new Date(2022, 10, 16))).toEqual(12)

    expect(getIndex(new Date(2022, 10, 17))).toEqual(13)
    expect(getIndex(new Date(2022, 10, 18))).toEqual(14)
    expect(getIndex(new Date(2022, 10, 18, 15, 42, 0))).toEqual(14)

    expect(getIndex(new Date(2022, 10, 23, 15, 42, 0))).toEqual(19)

    expect(getIndex(new Date(2022, 10, 24))).toEqual(20)
  })

  test('word of the day', () => {
    expect(() => getWordOfDay(-1)).toThrowError('Invalid index')
    //expect(getWordOfDay(0)).toEqual('WHICH')  // TODO
    //expect(getWordOfDay(1)).toEqual('THERE')
    //expect(getWordOfDay(255)).toEqual('SHEEP')
  })
})
