export default class Matrix {

    private describeMatrix: string;
    public rows: number[][] = new Array<number[]>()
    public columns: number[][] = new Array<number[]>()

    constructor(describeMatrix: string) {
        this.describeMatrix = describeMatrix;
        this.initMatrix();
    }

    private initMatrix(): void {
        this.initRows();
        this.initColums();
    }

    private initRows(): void {
        this.rows = this.describeMatrix.split('\n').map(row => {
            return row.split(' ').map( char => {
                return parseInt(char);
            })
        });
    }

    private initColums(): void {
        let rowLength = this.rows.length;
        let columnsLength = this.rows[0].length;

        for (let i = 0; i < columnsLength; i++) {
            this.columns.push([]);
            for (let j = 0; j < rowLength; j++) {
                this.columns[i].push(this.rows[j][i]);
            }
        }
    }
}