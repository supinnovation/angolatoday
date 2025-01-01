
const citationTag = '"'
const titleTag = '|'

export default function paragraphDivider (text:string)  : string[] {
  let copy = text
  const arraytext = []
  while(copy.includes('.')){
     let localText = ""
    while(hasAllTitle(localText) && hasAllCitation(localText) && localText.length < 230 && copy.includes('.')){
      const texttoremove = getSizedTextByFirstPoint(copy)
      copy = copy.replace(texttoremove, "")
      localText += texttoremove
    }
    const localTextWithTitle = findTitles(localText)
    localTextWithTitle.forEach(e => 
      findCitations(e).forEach( e => arraytext.push(e)) )
  }
  arraytext.push(copy)
  return arraytext
}

const getSizedTextByFirstPoint = function(text:string){
  return text.substring(0, text.indexOf(".")+1)
}

const arrayFromTag = (text:string, tag:string) : string[] => {
  let first = true
  const response = []
  while(text.includes(tag)){
    const indexCitation = text.indexOf(tag)
    const gettedText = text.substring(0, indexCitation)
    text = text.replace(tag, '')
    text = text.replace(gettedText, "")
    if(first){
      response.push(gettedText)
    }
    else{
      response.push(tag+ gettedText+tag)
    }

    first = !first
  }
  response.push(text)
  return response
}

const findCitations = (text:string) => arrayFromTag(text, citationTag)
const findTitles = (text:string) => arrayFromTag(text, titleTag)

const countTag = (text:string, tag:string) => {
  let counter = 0
  text.split("").forEach( e => e == tag ? counter++ : 0)
  return counter
}

const hasAllTitle = (text:string) => {
  return countTag(text, titleTag) % 2 == 0
}

const hasAllCitation = (text:string) => {
  return countTag(text, citationTag) % 2 == 0
}