class Grade {
    
    constructor() {
        this.grades = [];
    }

    add(grade) {
        this.grades.push(grade);
    }

    delete(id) {
        this.grades = this.grades.filter(function( grade ) {
            return grade.id !== id;
        });
    }

    update(grade) {
        this.delete(grade.id);
        this.add(grade);
    }

    read() {
        return this.grades;
    }
}

exports.Grade = Grade;