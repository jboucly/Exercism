export function keep<ANY>(val: ANY[], funct: (elem: ANY) => boolean): ANY[] {
    const valToKeep: ANY[] = [];
    val.forEach(element => {
        if (funct(element)) valToKeep.push(element);
    });
    return valToKeep;
}


export function discard<ANY>(val: ANY[], funct: (elem: ANY) => boolean): ANY[] {
    const valToDiscared: ANY[] = [];
    val.forEach(element => {
        if (!funct(element)) valToDiscared.push(element);
    });

    return valToDiscared;
}