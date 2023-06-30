export class Institutes {
    // public instituteId!: number;
    // public instituteName!: string;
    // public instituteImgUrl!: string;
    // public instituteLocation!: string;
    // public instituteRating!: number;
    // public instituteMobileNo!: number;
    // public instituteEmail!: number;
    // public instituteDescription!: number;

  public id!: number;
  public name!: String;
  public src!:String;
  public Place!:String;
  public rating!:number;

  constructor(id:number,name:String,src:String,Place:String,rating:number)
  {
      this.id=id;
      this.name=name;
      this.src=src;
      this.Place=Place;
      this.rating=rating;
  }
}
