import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit{

  id!: number;
  user: User = {name: '', username: '', email: ''};
  successMessage = '';
  errorMessage = '';


  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.userService.getUserById(this.id).subscribe({
      next: (data) => {
        this.user = data;
      },
      error: () => {
        this.errorMessage = 'Failed to load user';
      }
    });
  }

  updateUser(): void {
    this.successMessage = '';
    this.errorMessage = '';

    if(!this.user.id){
      delete(this.user as any).getNoteById;
    }

    this.userService.updateUser(this.id, this.user).subscribe({
      next: () => this.successMessage = 'User updated successfully',
      error: () => {
        this.errorMessage = 'Failed to update user';
      }
    })


  }

}
