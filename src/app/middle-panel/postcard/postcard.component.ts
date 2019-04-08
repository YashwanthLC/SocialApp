import { Component, OnInit , ViewChild} from '@angular/core';
import { PostCardService } from '../../_services/postcardservice';
import { AuthServiceComm } from '../../_services/AuthService_comment';

@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.css']
})
export class PostcardComponent implements OnInit {
 // @ViewChild('newcomm') newcomm;
  objDataMiddle: object;
  CommUser: object;

  constructor(public objService: PostCardService , public userInfo:AuthServiceComm) { 
    this.objDataMiddle = objService.allPostCard;
    this.CommUser = userInfo.userData;
  }
  // onAddComments(val) {
  //   this.userInfo.userData[0].txtComment=val;
  //   this.objService.allPostCard[0].comments.push(this.userInfo.userData);
  //   console.log(this.userInfo.userData[0].txtComment);
  // }

  ngOnInit() {
  }

}
