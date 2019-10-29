export default class Isogram {
    static isIsogram(s: string): boolean {
        if (s.toLowerCase().match(/([A-Za-z\u0080-\u00FF]).*\1/)) return false;
        else return true;
    }
}