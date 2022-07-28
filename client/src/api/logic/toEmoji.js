export default function toEmoji(code){
    const emojiList = ["&#128507;",	"&#128508;", "&#128509;",
    "&#128510;", "&#128511;", "&#128512;", "&#128513;",
    "&#128514;", "&#128515;", "&#128516;",  "&#128517;"];
    const randIndex = Math.floor(Math.random() * emojiList.length) + 1;
    return String.fromCodePoint(parseInt(emojiList[randIndex-1].slice(2, -1)));
}