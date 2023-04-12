//complete this code
class Person {
	constructor(name,age){
		this.nam=name;
		this.age=age;
	}
	get getName(){
		return this.nam;
	}
	set SetAge(age){
		this.age=age;
	}
	
}

class Student extends Person {
	study(){
		console.log(`${this.nam} is studying`)
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.nam} is teaching`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
