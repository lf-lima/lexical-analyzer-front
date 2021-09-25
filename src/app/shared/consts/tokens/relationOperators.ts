export const relationOperators = {
  ['>']: '>',
  ['>=']: '>=',
  ['<']: '<',
  ['<=']: '<=',
  ['==']: '==',
  ['!=']: '!='
}

const normalizeTokens = () => {
  const tokens = Object.values(relationOperators)

  let listTokens = ``

  for (const [i, token] of tokens.entries()) {
    if (token.length > 1) {
      for (const character of token) {
        listTokens += `\\${character}`
      }
    } else {
      listTokens += `\\${token}`
    }

    if (tokens[i + 1]) {
      listTokens += '|'
    }
  }

  return listTokens
}

export const expression = normalizeTokens()
