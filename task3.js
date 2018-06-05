/* Task 3 */

function splitLine(str){
    let a = str.match(/e|y|u|o|i|a|а|и|е|ё|о|у|ы|э|ю|я/gi),
        b = str.match(/q|w|r|t|p|s|d|f|g|h|j|k|l|z|x|c|v|b|n|m|б|в|г|д|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ/gi),
        c = str.match(/\d/gi);
    return (a ? a.join('') : '') + ' '
        + (b ? b.join('') : '') + ' '
        + (c ? c.join('') : '');
}

console.log( splitLine( process.argv[2]) );