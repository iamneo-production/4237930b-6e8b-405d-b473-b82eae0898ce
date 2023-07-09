import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Institute } from 'src/app/class/institute';
import { AdminserviceService } from 'src/app/service/adminservice/adminservice.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-editinstitute',
  templateUrl: './editinstitute.component.html',
  styleUrls: ['./editinstitute.component.css']
})
export class EditinstituteComponent implements OnInit {

  constructor(private router:Router,private adminservice:AdminserviceService,private route:ActivatedRoute, private toastr :ToastrService){}

  newinstitute : Institute = new Institute();
  instituteId !:number;

  ngOnInit(): void {
    this.instituteId = this.route.snapshot.params['instituteId'];
    console.log(this.instituteId);
    this.adminservice.getInstituteById(this.instituteId).subscribe(data => {
          this.newinstitute = data;
    });
  }

  //To add the New institute
  onSubmit(): void {
    this.adminservice.editInstitute(this.instituteId,this.newinstitute).subscribe({
      next:()=>console.log('updating'),
      error:()=>console.log('Error while updating'),
      complete:()=>{
        this.toastr.success('Institute Updated Sucessfully!', 'Institute status !');
        this.gotoInstitutePage();
        console.log('Updated');
      }
    })
  }

  //To navigate to the institute Page
  gotoInstitutePage(): void {
      this.router.navigate(['/admin/institute']);
  }

}
