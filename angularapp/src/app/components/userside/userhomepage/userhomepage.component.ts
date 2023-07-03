import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Institutes } from 'src/app/class/institutes';

@Component({
  selector: 'app-userhomepage',
  templateUrl: './userhomepage.component.html',
  styleUrls: ['./userhomepage.component.css']
})
export class UserhomepageComponent implements OnInit {

  constructor(private router: Router) {}
  searchText!: string;

  ngOnInit(): void {
  }

  institutes ?: Institutes[]=[
    new Institutes(1,"PSG CAS","https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80","Coimbatore",5),
    new Institutes(2,"BIT","https://static.businessworld.in/article/article_extra_large_image/1616143247_9SQluK_Bannari_Amman_Institute_of_Technology.jpg","Sathyamangalam",4),
    new Institutes(3,"SRI KRISHNA","https://i.ytimg.com/vi/hhArRZNWRj0/maxresdefault.jpg","Coimbatore",3),
    new Institutes(1,"PSG CAS","https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80","Coimbatore",5),
    new Institutes(2,"BIT","https://static.businessworld.in/article/article_extra_large_image/1616143247_9SQluK_Bannari_Amman_Institute_of_Technology.jpg","Sathyamangalam",4),
    new Institutes(3,"SRI KRISHNA","https://i.ytimg.com/vi/hhArRZNWRj0/maxresdefault.jpg","Coimbatore",3),
    new Institutes(1,"PSG CAS","https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80","Coimbatore",5),
    new Institutes(2,"BIT","https://static.businessworld.in/article/article_extra_large_image/1616143247_9SQluK_Bannari_Amman_Institute_of_Technology.jpg","Sathyamangalam",4),
    new Institutes(3,"SRI KRISHNA","https://i.ytimg.com/vi/hhArRZNWRj0/maxresdefault.jpg","Coimbatore",3),
    new Institutes(1,"PSG CAS","https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80","Coimbatore",5),
    new Institutes(2,"BIT","https://static.businessworld.in/article/article_extra_large_image/1616143247_9SQluK_Bannari_Amman_Institute_of_Technology.jpg","Sathyamangalam",4),
    new Institutes(3,"SRI KRISHNA","https://i.ytimg.com/vi/hhArRZNWRj0/maxresdefault.jpg","Coimbatore",3),
  ];

  gotocourse(): void {
    this.router.navigate(['/user/courses']);
  }

}
