// app.component.ts
import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users: any[] = [];
  albums: any[] = [];
  photos: any[] = [];
  selectedUserId: number | null = 1; // Varsayılan bir değer atayın veya null olarak bırakın.
  selectedAlbumId: number | null = 1; // Varsayılan bir değer atayın veya null olarak bırakın;

  constructor(private userService: UserService) { }
  ngOnInit() {
    this.loadUsers();
  }
  loadUsers() {
    this.userService.getUsers().subscribe((data: any[]) => {
      this.users = data;
    });
  }
  loadAlbums(userId: number) {
    this.selectedUserId = userId;
  }

  loadPhotos(albumId: any) {
    this.selectedAlbumId = albumId;
  }
}
