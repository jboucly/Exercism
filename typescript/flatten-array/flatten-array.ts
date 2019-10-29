export default class FlattenArray {
    public static flatten(toFlatten: any[], lastArray?: any[]): number[] {
        toFlatten.forEach(function (val) {
            if (val instanceof Array) {
                let length = val.length;
                val = val.splice(0, length);
                FlattenArray.flatten(val, lastArray);
            } else if(val !== null && val !== undefined && lastArray) {
                lastArray.push(val);
            }
        });
        return lastArray ?  lastArray : [];
    }
}