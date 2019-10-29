export default class Clock {

    private hour!: number;
    private min!: number;
    private clock: Date;


    constructor(hour: number, min: number = 0) {
        this.hour = hour; 
        this.min = min;
        this.clock = new Date();
        this.initClock();
    }

    private initClock(): void {
        this.clock.setHours(this.hour, this.min);
    }

    /**
     * Création du format de la date de retour : String
     */
    public toString(): string  {
        let hour: string = this.clock.getHours().toString();
        let min : string = this.clock.getMinutes().toString();

        if (hour.length === 1) hour = '0' + hour;
        if (min === '0' || min.length === 1) min = '0' + min;

        return hour + ':' + min;
    }

    /**
     * Ajout de minute
     * @param addMin 
     */
    public plus(addMin: number): string {
        this.clock.setMinutes(this.min + addMin);
        return this.toString();
    }

    /**
     * Suppression de minute
     * @param delMin 
     */
    public minus(delMin: number): string {
        this.clock.setMinutes(this.min - delMin);
        return this.toString();
    }

    /**
     * Comparre les deux horloges
     * @param clock Objet Clock
     */
    public equals(clock: Clock): boolean {
        return this.toString() === clock.toString();
    }

}