export default function randomColor(){
    let allchar="0123456789ABCDEF";
    let randcol= "";
    for(var i=0; i<6; i++){
       randcol += allchar[Math.floor(Math.random()*16)];
    }

    return "#"+randcol;
}