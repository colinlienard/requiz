export type ChatMessageType = {
  author?: string,
  content: string,
  id: string
}

export type User = {
  name: string,
  id: string,
  lives: number
}

export type UserFromDB = {
  id: string,
  name: string,
  email: string,
  image?: string
  password?: string
}

export type GameState = 'waiting' | 'playing' | 'end'

export type QuizResponse = {
  id: number,
  value: string
}

export type QuizQuestion = {
  id: number,
  question: string,
  responses: QuizResponse[],
  correct: number
}

export type QuizData = {
  quizId?: string,
  status?: 'draft' | 'published',
  title?: string,
  description?: string,
  themes?: string[],
  maxPlayers?: number,
  startDate?: number,
  questions?: QuizQuestion[]
}
