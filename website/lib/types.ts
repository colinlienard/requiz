export type ChatMessageType = {
  author?: string,
  content: string,
  id: string
}

export type User = {
  name: string,
  id: number,
  lives: number
}

export type GameState = 'waiting' | 'playing' | 'end'

export type QuizQuestion = {
  question: string,
  responses: string[],
  correct: number
}
