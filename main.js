
import { Student } from "./models.js";
import { fetchStudents } from "./database.js";
import {
    calculateClassAverage,
    findTopStudent,
    filterStudents
} from "./analytics.js";

fetchStudents((rawData) => {
    console.log("Data received!");
    console.log();
    
    const students = rawData.map(
        ({ id, name, courses }) => new Student(id, name, courses)
    );
    
    console.log("Testing Immutability:");
    console.log(`Original ID: ${students[0].id}`);
    console.log("Attempting to change ID to 999...");
    
    try {
        students[0].id = 999;
    } catch (error) {

    }
    
    console.log(
        `Final ID: ${students[0].id} (Success: ${
            students[0].id === 1 ? "ID did not change" : "ID changed"
        })`
    );
    console.log();
    
    const classAverage = calculateClassAverage(students, 101);
    const topStudent = findTopStudent(students);
    
    const course102Students = filterStudents(
        students,
        (student) =>
        student.courses.some((course) => course.courseId === 102)
    );
    
    console.log("--- Analytics Report ---");
    console.log(
        `Class Average for Course 101: ${classAverage.toFixed(2)}`
    );
    console.log(
        `Top Student: ${topStudent.name} (Average: ${topStudent.getAverage()})`
    );
    console.log(
        `Students in Course 102: ${course102Students
            .map((student) => student.name)
            .join(", ")}`
    );
});
