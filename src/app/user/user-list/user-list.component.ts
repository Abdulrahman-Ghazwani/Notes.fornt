import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{

  user: User[] = [];
  errorMessage = '';

  constructor(
    private userService: UserService
  ){}


  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void{
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.user = data; 
      }, 
      error: () => {
        this.errorMessage = 'Failed to load users';
      }
    });
  }

  deleteUser(id: number): void{
    if(!confirm('Are you sure you want to delete this user? ')){
      return;
    }
    this.userService.deleteUser(id).subscribe({
      next: () => {
        this.user = this.user.filter(user=>user.id !== id);
      },
      error: () => {
        alert('Failed to delete user');
      }
    });
  }



}
