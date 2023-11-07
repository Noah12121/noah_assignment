import { Component } from '@angular/core';
import { User } from 'src/models/user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test';

  users: User[] = [];
  constructor(private userService: UserService) {}

  data: any;

  ngOnInit(): void {
    this.userService.getUser().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data: ', error);
      }
    )
  }

    displayedColumns: string[] = ['id', 'name', 'salary', 'age','image'];

}
