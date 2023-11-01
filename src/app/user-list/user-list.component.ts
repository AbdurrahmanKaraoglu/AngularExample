// user-list.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  @Input() users: any[] = [];
  @Input() albums: any[] = []; // Album listesini bu bileşene ekleyin
  @Input() selectedAlbumId: number | null = null; // Seçili albümü de ekleyin
  @Output() userSelected = new EventEmitter<number>();


  constructor() {}

  selectUser(userId: number) {
    console.log('User selected: ', userId);
    this.userSelected.emit(userId);
  }

  selectAlbum(albumId: number) {
    console.log('Album selectedx: ', albumId);
    this.selectedAlbumId = albumId;
  }

  
}
