import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Institute } from 'src/app/class/institute';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-institutes',
  templateUrl: './institutes.component.html',
  styleUrls: ['./institutes.component.css']
})
export class InstitutesComponent implements OnInit {

  constructor(private router: Router,private modalService: NgbModal){}
  searchText!: string;

  ngOnInit(): void {
  }

  institutes ?: Institute[]=[
    new Institute(1,"PSG CAS","https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80","Coimbatore",5),
    new Institute(2,"BIT","https://static.businessworld.in/article/article_extra_large_image/1616143247_9SQluK_Bannari_Amman_Institute_of_Technology.jpg","Sathyamangalam",4),
    new Institute(3,"SRI KRISHNA","https://i.ytimg.com/vi/hhArRZNWRj0/maxresdefault.jpg","Coimbatore",3),
    new Institute(1,"PSG CAS","https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80","Coimbatore",5),
    new Institute(2,"BIT","https://static.businessworld.in/article/article_extra_large_image/1616143247_9SQluK_Bannari_Amman_Institute_of_Technology.jpg","Sathyamangalam",4),
    new Institute(3,"SRI KRISHNA","https://i.ytimg.com/vi/hhArRZNWRj0/maxresdefault.jpg","Coimbatore",3),
    new Institute(1,"PSG CAS","https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80","Coimbatore",5),
    new Institute(2,"BIT","https://static.businessworld.in/article/article_extra_large_image/1616143247_9SQluK_Bannari_Amman_Institute_of_Technology.jpg","Sathyamangalam",4),
    new Institute(3,"SRI KRISHNA","https://i.ytimg.com/vi/hhArRZNWRj0/maxresdefault.jpg","Coimbatore",3),
    new Institute(1,"PSG CAS","https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80","Coimbatore",5),
    new Institute(2,"BIT","https://static.businessworld.in/article/article_extra_large_image/1616143247_9SQluK_Bannari_Amman_Institute_of_Technology.jpg","Sathyamangalam",4),
    new Institute(3,"SRI KRISHNA","https://i.ytimg.com/vi/hhArRZNWRj0/maxresdefault.jpg","Coimbatore",3),
  ]

    

    gotoeditinstitute()
    {
      this.router.navigate(['/admin/editinstitute']);
    }

    //for delete popup modal
    open(content:any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        console.log(result);
      }, (reason) => {
        console.log(reason);
      });
    }

    delete(): void
    {
      this.modalService.dismissAll();
    }


}
