import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicDataService } from '../music-data.service';
let letters = ["A", "z","r","L","w"];
let len = letters.length

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  results: any;
  searchQuery: any;
  constructor(private route: ActivatedRoute, private musicData: MusicDataService) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.searchQuery = params.get('q');
    });
    this.musicData.searchArtists(this.searchQuery).subscribe((data) => {
      let musicArray = data.artists.items;

      this.results = musicArray.filter((item: any) => item.images.length > 0);
    });
  }

}
