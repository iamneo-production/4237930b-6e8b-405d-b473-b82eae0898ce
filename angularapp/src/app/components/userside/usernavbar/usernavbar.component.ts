import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usernavbar',
  templateUrl: './usernavbar.component.html',
  styleUrls: ['./usernavbar.component.css']
})
export class UsernavbarComponent implements OnInit {

  constructor(private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {
  }

  gotToLogin(): void
  {
    this.router.navigate(['/auth/login']);
    this.toastr.success('Logout successful !', 'Logout Status !');
  }

}
