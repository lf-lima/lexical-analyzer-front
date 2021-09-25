export const instructionBlocks = {
  ['(']: '(',
  [')']: ')',
  ['[']: '[',
  [']']: ']',
  ['{']: '{',
  ['}']: '}'
}

const normalizeTokens = () => {
  const tokens = Object.values(instructionBlocks)

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
