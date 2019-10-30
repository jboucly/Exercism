export default class QueenAttack {

    public black: number[];
    public white: number[];
    private board: { [key: string]: string } = {};

    constructor(params: { black: [number, number], white: [number, number] }) {
        if (this.testPosition(params)) throw new Error('Queens cannot share the same space');

        this.black = params.black;
        this.white = params.white;
        this.initBoard();
    }

    /**
     * Permet de vérifier la position des reines dans le cas ou elle serait à la même place.
     * @param position Object
     */
    private testPosition(position: { black: number[], white: number[] }): boolean {
        return (position.black[0] === position.white[0] && position.black[1] === position.white[1]);
    }

    /**
     * Permet d'initialiser le plateau de jeu (Matrix)
     */
    public initBoard(): void {
        const black = this.black.toString().replace(',', '_');
        const white = this.white.toString().replace(',', '_');

        for (let rows = 0; rows < 8; rows++) {
            for (let col = 0; col < 8; col++) {
                let nameOfLigne = `${rows}_${col}`;
                if (black === nameOfLigne) { this.board[nameOfLigne] = 'black'; }
                else if (white === nameOfLigne) { this.board[nameOfLigne] = 'white'; }
                else { this.board[`${rows}_${col}`] = '_'; }
            }
        }
    }

    /**
      * Permet de transformer la matrix en string[] formaté
      */
    public toString(): string[] {
        let boardToReturn: any = [];
        let col: number = 0;
        let row: string = '';

        Object.keys(this.board).forEach((key, index) => {
            const val = this.board[key];
            if (val === 'black') { row = `${row} B`; }
            else if (val === 'white') { row = `${row} W`; }
            else { row = `${row} ${val}`; }

            col++;

            if (index === 64 || col === 8) {
                boardToReturn.push(`${row.trim()}\n`);
                col = 0;
                row = '';
            }
        });
        return boardToReturn.join('');
    }


    public canAttack = (): boolean => {
        if (this.black[0] === this.white[0] || this.black[1] === this.white[1]) {
            return true
        }
        return (
            Math.abs(this.black[0] - this.white[0]) ===
            Math.abs(this.black[1] - this.white[1])
        )
    }
}
