import { toolsToType } from './toolsToType'
import { FileAnalysis } from '../models/fileAnalysis'

export function analyseFile(fileText: string): FileAnalysis[] {
  {
    const fileAnalysis: FileAnalysis[] = []

    const splitLines = /\n+/g
    const splitAllCharactersGroups = /(\/\/.*|"[^\"]*"|&&|\|\||>=|<=|!=|==|[\W\s])/g
    const findStringsOnlySpaces = /^\s*$/

    const lines = fileText.split(splitLines)

    for (const [i, line] of lines.entries()) {
      const splittedLine = line.split(splitAllCharactersGroups).filter(a => !findStringsOnlySpaces.test(a))

      if (splittedLine.length) {
        console.log(`\n--- Linha ${i + 1} ---`)

        for (const characterGroup of splittedLine) {
          let haveType = false

          for (const toolToType of toolsToType) {
            if (toolToType.expression.test(characterGroup)) {
              haveType = true

              console.log(`${characterGroup} -> ` + toolToType.type)

              fileAnalysis.push({
                characterGroup,
                type: toolToType.type
              })

              break
            }
          }

          if (!haveType) {
            console.log(`${characterGroup} -> ` + 'Outros')

            fileAnalysis.push({
              characterGroup,
              type: 'Outros'
            })
          }
        }
      }
    }

    return fileAnalysis
  }
}
