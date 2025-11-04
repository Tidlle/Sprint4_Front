export type Integrante = {
  id: string
  nome: string
  rm: string
  turma: string
  cargo?: 'dev' 
}

export const INTEGRANTES: Integrante[] = [
  { id: '1', nome: 'Eduardo Martins', rm: '562259', turma: '1TDSA', cargo: 'dev' },
  { id: '2', nome: 'Vitor Madrigrano', rm: '432456', turma: '1TDSA', cargo: 'dev' },
  { id: '3', nome: 'Thiago Sposito', rm: ' 0003', turma: '1TDSA', cargo: 'dev' },
]
