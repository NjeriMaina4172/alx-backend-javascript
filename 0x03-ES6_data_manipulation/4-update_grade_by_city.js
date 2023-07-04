export default function updateStudentGradeByCity(list, city, newGrades) {
  return list
    .filter((el) => el.location === city)
    .map((student) => {
      const grades = newGrades.filter((el) => el.studentId === student.id);
      const grade = grades.length ? grades[0].grade : 'N/A';
      return {
        ...student,
        grade,
      };
    });
}
