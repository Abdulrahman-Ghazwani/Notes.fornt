import { Component } from '@angular/core';
import { User } from '../user.model';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {

  user: User = {
    name: '',
    username: '',
    email: ''
  };
  
  constructor(
    private userService: UserService,
    private router: Router
  ){}

  successMessage = '';
  errorMessage = '';


  saveUser(): void {
    this.successMessage = '';
    this.errorMessage = '';

    this.userService.createUser(this.user).subscribe({
      next: (res) => {
        console.log('Saved: ', res);
        this.successMessage = 'User saved successfully';
        this.user = {name: '', username: '', email: ''};
      },
      error: (err) =>{
        console.error('Save Failed:', err);
        this.errorMessage = `Failed to save user (status: ${err.status})`;
        if(err?.error){
        console.error('Backend body:', err.error);
      }
      }
    });
  }

}
