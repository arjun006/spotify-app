import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-artist-discography',
  templateUrl: './artist-discography.component.html',
  styleUrls: ['./artist-discography.component.css']
})
export class ArtistDiscographyComponent implements OnInit {

  albums: Array<any>;
  artist: any;
  constructor(private musicData: MusicDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.musicData.getArtistById(id).subscribe((data)=>{this.artist = data});
    this.musicData.getAlbumsByArtistId(id).subscribe((data) => {
      const seen = new Set();
      let albumArray = data.items;
      this.albums = albumArray.filter((album: { name: unknown }) => {
        const duplicate = seen.has(album.name);
        seen.add(album.name);
        return !duplicate;
      });
      console.log(this.albums);
  });
  }

}


