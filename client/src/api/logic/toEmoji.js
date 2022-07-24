export default function toEmoji(code){
    return String.fromCodePoint(parseInt(code.slice(2, -1)));
}