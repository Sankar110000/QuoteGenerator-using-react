function getAuthor(str, strPiece){
    let newStr = str.slice(0, str.search(strPiece))
    return newStr;
}

function getRandIdx(arr){
    return Math.round(Math.random()*arr.length)
}

export {getRandIdx, getAuthor}