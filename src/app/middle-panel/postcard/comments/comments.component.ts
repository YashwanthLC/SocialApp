import { Component, OnInit, Input } from '@angular/core';
import { PostCardService } from '../../../_services/postcardservice';
import { AuthServiceComm } from '../../../_services/AuthService_comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent  {
  @Input() objComments;
  @Input() indcomm;
  //CommUser: Object;

  constructor(public objService: PostCardService , public userInfo:AuthServiceComm) { 
    //this.CommUser = userInfo.userData;
  }

  onAddComments(val) {
    this.userInfo.userData[0].txtComment=val;
    this.objService.allPostCard[this.indcomm].comments.push(this.userInfo.userData[0]);
    //console.log(this.userInfo.userData[0].txtComment);
  }

 

}
