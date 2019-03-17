import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-middle-panel',
  templateUrl: './middle-panel.component.html',
  styleUrls: ['./middle-panel.component.css']
})
export class MiddlePanelComponent implements OnInit {
  @Input() objData;
  @Output() objOutData = new EventEmitter();

  // objDataMiddle: Object = [
  //   {
  //     "id": "5c7b7d432c41054697a51d9b",
  //     "profilename": "Hill",
  //     "profilepic": "http://localhost:4200/assets/images/4.jpg",
  //     "date": "2017-02-09T01:37:59 -06:-30",
  //     "like": {
  //       "count": 350,
  //       "data": [
  //         {
  //           "id": 0,
  //           "name": "Humphrey",
  //           "url": "http://localhost:4200/assets/images/4.jpg"
  //         },
  //         {
  //           "id": 1,
  //           "name": "Bartlett",
  //           "url": "http://localhost:4200/assets/images/5.jpg"
  //         },
  //         {
  //           "id": 2,
  //           "name": "Lakeisha",
  //           "url": "http://localhost:4200/assets/images/2.jpg"
  //         }
  //       ]
  //     },
  //     "category": {
  //       "type": 1,
  //       "data": {
  //         "txtcontent": "Deserunt nisi quis aute do. Laboris do deserunt Lorem veniam commodo. Quis cupidatat qui voluptate ex occaecat aliquip dolore excepteur fugiat consectetur. Do ad magna tempor aliquip velit. Et reprehenderit adipisicing fugiat anim reprehenderit eu amet nulla consectetur proident dolore reprehenderit.\r\n"
  //       }
  //     },
  //     "comments": [{
  //       "id": 101,
  //       "picURL": "http://localhost:4200/assets/images/2.jpg",
  //       "txtComment": "Nice information. Keep it up !...",
  //       "like": {
  //         "count": 36,
  //         "data": [
  //           {
  //             "id": 11,
  //             "name": "Humphrey",
  //             "url": "http://localhost:4200/assets/images/4.jpg"
  //           }]
  //       },
  //       "subComment": [{
  //         "id": 101,
  //         "picURL": "http://localhost:4200/assets/images/4.jpg",
  //         "txtComment": "One level down..."
  //       }]
  //     }]
  //   },
  //   {
  //     "id": "5c7b7d432c41054697a51d9b",
  //     "profilename": "Hill",
  //     "profilepic": "http://localhost:4200/assets/images/4.jpg",
  //     "date": "2017-02-09T01:37:59 -06:-30",
  //     "like": {
  //       "count": 350,
  //       "data": [
  //         {
  //           "id": 0,
  //           "name": "Humphrey",
  //           "url": "http://localhost:4200/assets/images/4.jpg"
  //         },
  //         {
  //           "id": 1,
  //           "name": "Bartlett",
  //           "url": "http://localhost:4200/assets/images/5.jpg"
  //         },
  //         {
  //           "id": 2,
  //           "name": "Lakeisha",
  //           "url": "http://localhost:4200/assets/images/2.jpg"
  //         }
  //       ]
  //     },
  //     "category": {
  //       "type": 2,
  //       "ques": "What is the formula for Sodium Chloride?.",
  //       "data": [{
  //         "id": 1,
  //         "text": "NaCl",
  //         "count": 23
  //       },
  //       {
  //         "id": 2,
  //         "text": "SoCl",
  //         "count": 30
  //       }]
  //     },
  //     "comments": [{
  //       "id": 101,
  //       "picURL": "http://localhost:4200/assets/images/2.jpg",
  //       "txtComment": "Nice information. Keep it up !...",
  //       "like": {
  //         "count": 36,
  //         "data": [
  //           {
  //             "id": 11,
  //             "name": "Humphrey",
  //             "url": "http://localhost:4200/assets/images/4.jpg"
  //           }]
  //       },
  //       "subComment": [{
  //         "id": 101,
  //         "picURL": "http://localhost:4200/assets/images/4.jpg",
  //         "txtComment": "One level down..."
  //       }]
  //     }]
  //   },
  //   {
  //     "id": "5c7b7d43d4d7caf4bc280f96",
  //     "profilename": "Irma",
  //     "profilepic": "http://localhost:4200/assets/images/4.jpg",
  //     "date": "2018-11-10T07:16:54 -06:-30",
  //     "like": {
  //       "count": 361,
  //       "data": [
  //         {
  //           "id": 0,
  //           "name": "Jana",
  //           "url": "http://localhost:4200/assets/images/1.jpg"
  //         },
  //         {
  //           "id": 1,
  //           "name": "Marci",
  //           "url": "http://localhost:4200/assets/images/4.jpg"
  //         },
  //         {
  //           "id": 2,
  //           "name": "Bernadette",
  //           "url": "http://localhost:4200/assets/images/4.jpg"
  //         }
  //       ]
  //     },
  //     "category": {
  //       "type": 1,
  //       "data": {
  //         "txtcontent": "Laborum eiusmod proident velit reprehenderit occaecat veniam non anim aliqua anim sint esse dolore. Occaecat commodo qui proident consequat. Reprehenderit velit adipisicing do ex ex. Elit esse est deserunt id deserunt.\r\n"
  //       }
  //     }
  //   },
  //   {
  //     "id": "5c7b7d43e901a155ff97c11f",
  //     "profilename": "Aileen",
  //     "profilepic": "http://localhost:4200/assets/images/3.jpg",
  //     "date": "2017-08-08T04:09:22 -06:-30",
  //     "like": {
  //       "count": 350,
  //       "data": [
  //         {
  //           "id": 0,
  //           "name": "Lidia",
  //           "url": "http://localhost:4200/assets/images/4.jpg"
  //         },
  //         {
  //           "id": 1,
  //           "name": "Kristie",
  //           "url": "http://localhost:4200/assets/images/3.jpg"
  //         },
  //         {
  //           "id": 2,
  //           "name": "Moore",
  //           "url": "http://localhost:4200/assets/images/2.jpg"
  //         }
  //       ]
  //     },
  //     "category": {
  //       "type": 1,
  //       "data": {
  //         "txtcontent": "Officia sunt dolor culpa veniam dolore ad officia magna nisi est in exercitation excepteur dolore. Dolor cillum reprehenderit laborum voluptate irure ex est tempor exercitation Lorem. Officia pariatur elit deserunt sint voluptate esse cupidatat ea cupidatat proident tempor et culpa eu. Cupidatat irure commodo aliquip consequat non fugiat ullamco do id quis aute non. Velit sint ipsum laborum voluptate consequat culpa.\r\n"
  //       }
  //     }
  //   },
  //   {
  //     "id": "5c7b7da230514850bf51be6b",
  //     "profilename": "Villarreal",
  //     "profilepic": "http://localhost:4200/assets/images/4.jpg",
  //     "date": "2014-04-24T09:11:32 -06:-30",
  //     "like": {
  //       "count": 150,
  //       "data": [
  //         {
  //           "id": 0,
  //           "name": "Gilda",
  //           "url": "http://localhost:4200/assets/images/2.jpg"
  //         },
  //         {
  //           "id": 1,
  //           "name": "Faith",
  //           "url": "http://localhost:4200/assets/images/3.jpg"
  //         },
  //         {
  //           "id": 2,
  //           "name": "Clare",
  //           "url": "http://localhost:4200/assets/images/5.jpg"
  //         }
  //       ]
  //     },
  //     "category": {
  //       "type": 0,
  //       "data": {
  //         "imgurl": "http://localhost:4200/assets/images/3.jpg",
  //         "location": [
  //           "Agate Court",
  //           "Gila"
  //         ]
  //       }
  //     }
  //   },
  //   {
  //     "id": "5c7b7da2498ea7fa790d599e",
  //     "profilename": "Marlene",
  //     "profilepic": "http://localhost:4200/assets/images/3.jpg",
  //     "date": "2014-03-11T04:06:31 -06:-30",
  //     "like": {
  //       "count": 248,
  //       "data": [
  //         {
  //           "id": 0,
  //           "name": "Mariana",
  //           "url": "http://localhost:4200/assets/images/1.jpg"
  //         },
  //         {
  //           "id": 1,
  //           "name": "Flowers",
  //           "url": "http://localhost:4200/assets/images/1.jpg"
  //         },
  //         {
  //           "id": 2,
  //           "name": "Mueller",
  //           "url": "http://localhost:4200/assets/images/4.jpg"
  //         }
  //       ]
  //     },
  //     "category": {
  //       "type": 0,
  //       "data": {
  //         "imgurl": "http://localhost:4200/assets/images/2.jpg",
  //         "location": [
  //           "Nassau Avenue",
  //           "Crisman"
  //         ]
  //       }
  //     }
  //   },
  //   {
  //     "id": "5c7b7da2ea288b4ad8aae6e2",
  //     "profilename": "Lara",
  //     "profilepic": "http://localhost:4200/assets/images/1.jpg",
  //     "date": "2018-09-25T12:18:13 -06:-30",
  //     "like": {
  //       "count": 302,
  //       "data": [
  //         {
  //           "id": 0,
  //           "name": "Cassie",
  //           "url": "http://localhost:4200/assets/images/3.jpg"
  //         },
  //         {
  //           "id": 1,
  //           "name": "Ava",
  //           "url": "http://localhost:4200/assets/images/4.jpg"
  //         },
  //         {
  //           "id": 2,
  //           "name": "Fay",
  //           "url": "http://localhost:4200/assets/images/1.jpg"
  //         }
  //       ]
  //     },
  //     "category": {
  //       "type": 0,
  //       "data": {
  //         "imgurl": "http://localhost:4200/assets/images/5.jpg",
  //         "location": [
  //           "Bay Street",
  //           "Delco"
  //         ]
  //       }
  //     }
  //   }

  // ]

  constructor() { }


  ngOnInit() {
    this.objOutData.emit("This is my output");

  }

}
