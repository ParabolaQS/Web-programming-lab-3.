export function calculateClassAverage(students, courseId) {
    const courseGrades = students
        .map(student =>
            student.courses.find(course => course.courseId === courseId)
        )
        .filter(course => course !== undefined)
        .map(course => course.grade);

    if (courseGrades.length === 0) {
        return 0;
    }

    const total = courseGrades.reduce((sum, grade) => sum + grade, 0);
    return total / courseGrades.length;
}

export function findTopStudent(students) {
    if (students.length === 0) {
        return null;
    }

    return students.reduce((topStudent, currentStudent) => {
        return currentStudent.getAverage() > topStudent.getAverage()
            ? currentStudent
            : topStudent;
    });
}

export function filterStudents(students, criteriaFn) {
    return students.filter(criteriaFn);
}
