import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css']
})
export class QuestComponent implements OnInit {
  @Input() objDataPole;

  constructor() { }

  ngOnInit() {
  }

}
