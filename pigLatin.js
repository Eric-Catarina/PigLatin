console.log(PigIt("Pig latin is cool !"))

function PigIt(string) {
    let splitedString = string.split(" ")
    let unitedString = []

    for (let word of splitedString) {
        unitedString.push(MoveFirstLetterToFinalAndAddAy(word))
    }
    function MoveFirstLetterToFinalAndAddAy(word) {
        if (TestIfStringContainsPunctuation(word)) {
            return word
        }
        else {
            let firstLetter = word[0]
            let wordWithoutFirstLetter = word.slice(1)
            wordWithoutFirstLetter = wordWithoutFirstLetter + firstLetter
            return wordWithoutFirstLetter + "ay"
        }

    }
    function TestIfStringContainsPunctuation(string) {
        return /[!.,;?]/.test(string)
    }
    return unitedString
}

