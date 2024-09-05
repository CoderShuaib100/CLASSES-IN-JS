class student {
    constructor(name,age,roll) {
        this.name = name;
        this.age = age;
        this.roll = roll;
    }
    InfoWrite(){
        document.write("Name: " + this.name + "<br>");
        document.write("Age: " + this.age + "<br>");
        document.write("Roll No:  " + this.roll + "<br>");
    }
}
// making variables
student1 = new student("Shuaib",13,9423);
student2 = new student("Rudhav",11,2013);
student3 = new student("Arham",12,2012);
// shuaib details
document.write(student1.name + "<br>");
document.write(student1.age + "<br>");
document.write(student1.roll + "<br>");
// rudhav details
document.write(student2.name + "<br>");
document.write(student2.age + "<br>");
document.write(student2.roll + "<br>");
// arham details
document.write(student3.name + "<br>");
document.write(student3.age + "<br>");
document.write(student3.roll + "<br>");

// using mathods as templates
// displaying shuaib info
student1.InfoWrite();

// making inherited classes

class car {
    constructor(brand) {
        this.CarName = brand;
    }
    present(){
        return "I have a " + this.CarName + ".";
    }
}

class model extends car {
    constructor(brand,mod) {
        super(brand)
        this.Model = mod;
    }
}

MyCar = new model("Tata","Punch");
document.write(MyCar.present());