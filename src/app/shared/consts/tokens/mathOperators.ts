export const mathOperators = {
  ['=']: '=',
  ['+']: '+',
  ['*']: '*',
  ['-']: '-',
  ['/']: '/',
  ['%']: '%'
}

const normalizeTokens = () => {
  const tokens = Object.values(mathOperators)

  let listTokens = ``

  for (const [i, token] of tokens.entries()) {
    listTokens += `\\${token}`

    if (tokens[i + 1]) {
      listTokens += '|'
    }
  }

  return listTokens
}

export const expression = normalizeTokens()
