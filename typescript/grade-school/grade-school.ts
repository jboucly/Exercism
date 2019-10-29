export default class GradeSchool {
    private list: StudentRoster = new StudentRoster();

    public addStudent(name: string, grade: number): void {
        const students = this.list.get(grade.toString()) || [];
        students.push(name);
        this.list.set(grade.toString(), students.sort());
    }

    public studentRoster(): StudentRoster {
        const newStudentRoster: StudentRoster = new StudentRoster();
        const keys: string[] = [];

        for (const key of this.list.keys()) {
            keys.push(key);
        }
        keys.sort();

        for (const each of keys) {
            const values = this.list.get(each) || [];
            newStudentRoster.set(each, Array.from(values).sort());
        }
        return newStudentRoster
    }

    public studentsInGrade(grade: number): string[] {
        const valToReturn = this.list.get(grade.toString()) || [];
        return valToReturn.sort();
    }
}

export class StudentRoster extends Map<string, string[]> {

    get(key: string): string[] | undefined {
        const tab = super.get(key);
        if (undefined === tab) return [];
        else return [...tab];
    }
}
