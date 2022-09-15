// /**
//  * @param {string} s
//  * @return {boolean}
//  */


 var isPalindrome = function(s) {
    //empty string check
    if (s.length === 0) return true;

    s = s.toLowerCase();

    //set up pointers for each end of string
    let i = 0, j = s.length - 1;

    while (i < j) {
        //advance pointer if not alphanumberic
        if ((s[i] < 'a' || s[i] > 'z') && (s[i] < '0' || s[i] > '9')) {
            i++;
            continue;
        }
        if ((s[j] < 'a' || s[j] > 'z') && (s[j] < '0' || s[j] > '9')) {
            j--;
            continue;
        }

        //check for match
        if (s[i] !== s[j]) {
            return false;
        }

        //advance pointers
        i++;
        j--;
    }

    return true;
};