export class Courses {

    public Coursename!:String;
    public Courseduration!:number;
    public Coursetimings!:String;
    public Coursedescription!:String;
    public noOfStudentsEnrolled!:number;

    constructor(Coursename:String,Courseduration:number,Coursetimings:String,Coursedescription:String,noOfStudentsEnrolled:number)
    {
        this.Coursename=Coursename;
        this.Courseduration=Courseduration;
        this.Coursetimings=Coursetimings;
        this.Coursedescription=Coursedescription;
        this.noOfStudentsEnrolled=noOfStudentsEnrolled;
    }
}