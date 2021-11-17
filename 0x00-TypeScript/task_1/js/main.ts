interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
    
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

function printFullName(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

export const printTeacher: printTeacherFunction = printFullName;

export interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

export interface StudentConstructor {
  mine(firstName: string, lastName: string): StudentClassInterface;
}

export const StudentClass: StudentConstructor =
class StudentClass implements StudentClassInterface {
  firstName: string
  lastName: string

  constructor(firstName: string, lastName: string) {
      this.firstName = firstName
      this.lastName = lastName
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}
