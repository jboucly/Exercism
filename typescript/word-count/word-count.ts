export default class Words {
    public count(input: string): Map<string, number> {
        const wordCount = new Map();
        const regex = /[^\s]+/g;
        const words = input.toLowerCase().match(regex);

        if (!words || words.length === 0) {
            return wordCount;
        }

        /* Ma correction */
        for (const word of words) {
            if (wordCount.get(word)) {
                wordCount.set(word, wordCount.get(word) + 1)
            } else {
                wordCount.set(word, 1)
            }
        }
        
        /* Correction d'un utilisateur :
        words.forEach((word) => {
            wordCount.set(word, wordCount.get(word) ? wordCount.get(word) + 1 : 1);
        });

        */

        return wordCount;
    }
}