import { Component, OnInit } from '@angular/core';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.css']
})
export class NewReleasesComponent implements OnInit {

  releases: Array<any> = [];
  constructor(private musicData: MusicDataService) { }

  ngOnInit(): void {
    this.musicData.getNewReleases().subscribe((data) => this.releases = data.albums.items)
  }

  ngOnDestroy(){
    
  }

}
