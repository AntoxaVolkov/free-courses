/* Task 3 */

function splitLine(str){
    let a = str.match(/e|y|u|o|i|a/gi),
        b = str.match(/q|w|r|t|p|s|d|f|g|h|j|k|l|z|x|c|v|b|n|m/gi),
        c = str.match(/\d/gi);
    return (a ? a.join('') : '') + ' '
        + (b ? b.join('') : '') + ' '
        + (c ? c.join('') : '');
}

console.log( splitLine( process.argv[2]) );