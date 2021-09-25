import { expression as reservedWordsExpression } from '../consts/tokens/reservedWords'
import { expression as mathOperatorsExpression } from '../consts/tokens/mathOperators'
import { expression as logicOperatorsExpression } from '../consts/tokens/logicOperators'
import { expression as relationOperatorsExpression } from '../consts/tokens/relationOperators'
import { expression as instructionBlocksExpression } from '../consts/tokens/instructionBlocks'
import { endInstruction as endInstructionExpression } from '../consts/tokens/endInstruction'

export const toolsToType = [
  {
    expression: new RegExp(`^(${reservedWordsExpression})$`),
    type: 'Palavra Reservada',
    color: 'yellow'
  },
  {
    expression: /^\d{1,}\.*\d*$/,
    type: 'Numérico',
    color: 'blue'
  },
  {
    expression: new RegExp(`^(${mathOperatorsExpression})$`),
    type: 'Operador Matemático',
    color: 'green'
  },
  {
    expression: /^".*"$/,
    type: 'String',
    color: 'cyan'
  },
  {
    expression: new RegExp(`^(${logicOperatorsExpression})$`),
    type: 'Operador Lógico',
    color: 'magenta'
  },
  {
    expression: new RegExp(`^(${instructionBlocksExpression})$`),
    type: 'Bloco de Instrução',
    color: 'black'
  },
  {
    expression: new RegExp(`^(${relationOperatorsExpression})$`),
    type: 'Operador Relacional',
    color: 'gray'
  },
  {
    expression: new RegExp(`^(${endInstructionExpression})$`),
    type: 'Final de instrução',
    color: 'red'
  },
  {
    expression: /^[a-zA-Z_]{1}\w*$/,
    type: 'Identificador',
    color: 'green'
  },
  {
    expression: /^\/\/.*/,
    type: 'Comentário',
    color: 'grey'
  }
]

for (const toolToType of toolsToType) {
  console.log(`${toolToType.type}: ${toolToType.expression}\n`)
}
