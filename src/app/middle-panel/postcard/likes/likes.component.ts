import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  @Input() objLikes;
  iLike: number = 0;
  constructor() { }

  ngOnInit() {
  }
  
  onAddLikes() {
    this.iLike = this.iLike + 1;
  }


}
