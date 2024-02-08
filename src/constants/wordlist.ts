const wordsList = [
  {
    letter: 'a',
    word: 'ananas',
    sound: '/sounds/words/ananas.mp3',
    image: '/images/small/ananas.png',
    imageBig: '/images/big/ananas.png',
  },
  {
    letter: 'a',
    word: 'arbuz',
    sound: '/sounds/words/arbuz.mp3',
    image: '/images/small/arbuz.png',
    imageBig: '/images/big/arbuz.png',
  },

  {
    letter: 'b',
    word: 'balon',
    sound: '/sounds/words/balon.mp3',
    image: '/images/small/balon.png',
    imageBig: '/images/big/balon.png',
  },
  {
    letter: 'b',
    word: 'but',
    sound: '/sounds/words/arbuz.mp3',
    image: '/images/small/but.png',
    imageBig: '/images/big/but.png',
  },
  {
    letter: 'b',
    word: 'biedronka',
    sound: '/sounds/words/biedronka.mp3',
    image: '/images/small/biedronka.png',
    imageBig: '/images/big/biedronka.png',
  },

  {
    letter: 'c',
    word: 'cytryna',
    sound: '/sounds/words/cytryna.mp3',
    image: '/images/small/cytryna.png',
    imageBig: '/images/big/cytryna.png',
  },

  {
    letter: 'ć',
    word: 'ćma',
    sound: '/sounds/words/cma.mp3',
    image: '/images/small/cma.png',
    imageBig: '/images/big/cma.png',
  },

  {
    letter: 'd',
    word: 'dom',
    sound: '/sounds/words/dom.mp3',
    image: '/images/small/dom.png',
    imageBig: '/images/big/dom.png',
  },
  {
    letter: 'd',
    word: 'delfin',
    sound: '/sounds/words/delfin.mp3',
    image: '/images/small/delfin.png',
    imageBig: '/images/big/delfin.png',
  },
  {
    letter: 'd',
    word: 'drzewo',
    sound: '/sounds/words/drzewo.mp3',
    image: '/images/small/drzewo.png',
    imageBig: '/images/big/drzewo.png',
  },
]

export default wordsList

export type WordItem = {
  letter: string
  word: string
  sound: string
  image: string
}
