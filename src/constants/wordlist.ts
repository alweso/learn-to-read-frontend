const wordsList = [
  {
    letter: 'a',
    word: 'ananas',
    sound: '/sounds/words/ananas.mp3',
    image: '/images/small/ananas.png',
  },
  {
    letter: 'a',
    word: 'arbuz',
    sound: '/sounds/words/arbuz.mp3',
    image: '/images/small/arbuz.png',
  },

  {
    letter: 'b',
    word: 'balon',
    sound: '/sounds/words/balon.mp3',
    image: '/images/small/balon.png',
  },
  {
    letter: 'b',
    word: 'but',
    sound: '/sounds/words/arbuz.mp3',
    image: '/images/small/but.png',
  },
  {
    letter: 'b',
    word: 'biedronka',
    sound: '/sounds/words/biedronka.mp3',
    image: '/images/small/biedronka.png',
  },

  {
    letter: 'c',
    word: 'cytryna',
    sound: '/sounds/words/cytryna.mp3',
    image: '/images/small/cytryna.png',
  },

  {
    letter: 'ć',
    word: 'ćma',
    sound: '/sounds/words/cma.mp3',
    image: '/images/small/cma.png',
  },

  {
    letter: 'd',
    word: 'dom',
    sound: '/sounds/words/dom.mp3',
    image: '/images/small/dom.png',
  },
  {
    letter: 'd',
    word: 'delfin',
    sound: '/sounds/words/delfin.mp3',
    image: '/images/small/delfin.png',
  },
  {
    letter: 'd',
    word: 'drzewo',
    sound: '/sounds/words/drzewo.mp3',
    image: '/images/small/drzewo.png',
  },
]

export default wordsList

export type WordItem = {
  letter: string
  word: string
  sound: string
  image: string
}
