const multiplyValue = (a: number, b?: number): number => {
  return a * (b ?? 2);
};


const processInput = (input: string | number | boolean): string | number => {
    if (typeof input === 'string') {
        return input.trim().toLowerCase();
    } else if (typeof input === 'number') {
        return input * 10;
    } else {
        return input === true ? "Active" : "Inactive";
    }
};


const formatCoordinate = (
    coordinate: readonly [number, number, string]
): string => {

    const [latitude, longitude, locationName] = coordinate;

    return `Location: ${locationName}, Latitude: ${latitude}, Longitude: ${longitude}`;
};



function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
}


interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

const getPopularCourses = (
    courses: Course[],
    minStudents: number
): Course[] => {
    return courses.filter(
        course => course.isPublished && course.students >= minStudents
    );
};


const pluckValues = <T, K extends keyof T>(
    items: T[],
    key: K
): T[K][] => {
    return items.map(item => item[key]);
};



class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private department: string;

    constructor(
        name: string,
        baseSalary: number,
        department: string
    ) {
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}



const validateAgeAsync = (age: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => resolve("Access Granted"), 1000);
        } else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
};