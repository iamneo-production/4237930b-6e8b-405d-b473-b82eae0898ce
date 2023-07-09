import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Institute } from 'src/app/class/institute';
import { AdminserviceService } from 'src/app/service/adminservice/adminservice.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-addinstitute',
  templateUrl: './addinstitute.component.html',
  styleUrls: ['./addinstitute.component.css']
})
export class AddinstituteComponent implements OnInit {

  constructor(private router:Router, private adminservice:AdminserviceService, private toastr :ToastrService) { }
  newinstitute : Institute = new Institute();
  
  ngOnInit(): void {
  }

  onSubmit(): void {
    this.addInstitute();
    console.log(this.newinstitute);
  }

  //For adding the new institute
  addInstitute(): void {
      this.newinstitute.instituteRating = 5;
      this.adminservice.addInstitute(this.newinstitute).subscribe({
        next:()=>console.log('updating'),
        error:()=>console.log('Error while updating'),
        complete:()=>{
        this.toastr.success('Institute added Sucessfully!', 'Institute status !');
        this.router.navigate(['/admin']);
        }
      })
    }

}
