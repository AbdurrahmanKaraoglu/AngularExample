import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnChanges {
  @Input() selectedAlbum: any;
  photos: any[] = [];

  constructor(private albumService: AlbumService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedAlbum'] && this.selectedAlbum) {
      this.albumService.getPhotos(this.selectedAlbum.id).subscribe((data: any[]) => {
        this.photos = data;
      });
    }
  }
}
