/* Task 1 */

function isPalindrome(str){
    let cleanStr = str.replace(/[^а-яёa-z0-9]/gi, '').toLowerCase();
    let reverseCleanStr = cleanStr.split('').reverse().join('');

    return cleanStr === reverseCleanStr ? 'YES' : 'NO';
}

process.stdout.write( isPalindrome(process.argv[2]) )