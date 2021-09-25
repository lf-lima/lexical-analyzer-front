export const reservedWords = {
  ASM: 'asm',
  AUTO: 'auto',
  BREAK: 'break',
  CASE: 'case',
  CHAR: 'char',
  CONST: 'const',
  CONTINUE: 'continue',
  DEFAULT: 'default',
  DO: 'do',
  DOUBLE: 'double',
  ELSE: 'else',
  ENUM: 'enum',
  EXTERN: 'extern',
  FLOAT: 'float',
  FOR: 'for',
  GOTO: 'goto',
  IF: 'if',
  INT: 'int',
  LONG: 'long',
  REGISTER: 'register',
  RETURN: 'return',
  SHORT: 'short',
  SIGNED: 'signed',
  SIZEOF: 'sizeof',
  STATIC: 'static',
  STRUCT: 'struct',
  SWITCH: 'switch',
  TYPEDEF: 'typedef',
  UNION: 'union',
  UNSIGNED: 'unsigned',
  VOID: 'void',
  VOLATILE: 'volatile',
  WHILE: 'while'
}

const normalizeTokens = () => {
  const tokens = Object.values(reservedWords)

  let listTokens = ``

  for (const [i, token] of tokens.entries()) {
    listTokens += `${token}`

    if (tokens[i + 1]) {
      listTokens += '|'
    }
  }

  return listTokens
}

export const expression = normalizeTokens()
