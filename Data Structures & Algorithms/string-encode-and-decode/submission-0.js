
class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";

        for (let str of strs) {
            result += str.length + "#" + str;
        }

        return result;
    }

    /**
     * @param {string} encoded_string
     * @returns {string[]}
     */
    decode(encoded_string) {
        let result = [];
        let i = 0;

        while (i < encoded_string.length) {
            let j = i;

            while (encoded_string[j] !== "#") {
                j++;
            }

            let length = Number(
                encoded_string.substring(i, j)
            );

            let str = encoded_string.substring(
                j + 1,
                j + 1 + length
            );

            result.push(str);

            i = j + 1 + length;
        }

        return result;
    }
}
