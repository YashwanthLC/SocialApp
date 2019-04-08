import { Component, OnInit, Input } from '@angular/core';
import { PostCardService } from '../../../_services/postcardservice';
import { AuthService } from '../../../_services/authservice';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  @Input() objLikes;
  @Input() indLikes;
  iLike: number = 0;
  indexNumber :number;
  //ArrayLen  : number;
  constructor(public postcardData:PostCardService, public userInfo:AuthService) { 

  }

  ngOnInit() {
  }
  
  onAddLikes() {
    if(this.postcardData.allPostCard[this.indLikes].like.Ind=="True")
    {
    this.postcardData.allPostCard[this.indLikes].like.count+=1;
    this.postcardData.allPostCard[this.indLikes].like.data.push(this.userInfo.userData);
    this.postcardData.allPostCard[this.indLikes].like.Ind="False";
    
    }
    else if(this.postcardData.allPostCard[this.indLikes].like.Ind=="False")
    {
    //this.ArrayLen=this.postcardData.allPostCard[this.indLikes].like.data.length-1 ;
    this.indexNumber=this.postcardData.allPostCard[this.indLikes].like.data.findIndex(p => p.id==67);
    //console.log(this.indexNumber);
    this.postcardData.allPostCard[this.indLikes].like.count--;
    this.postcardData.allPostCard[this.indLikes].like.data.splice(this.indexNumber,1);
    this.postcardData.allPostCard[this.indLikes].like.Ind="True";
    }
  }


}
