class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        let frq ={}
        for( let ch of s){
            frq[ch]=(frq[ch] || 0 )+1
        }
         for( let ch of t){
            if(!frq[ch]) return false 
            frq[ch]--;
        }
        return true
    }
}
