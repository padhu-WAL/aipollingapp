import { Component, OnInit, Input } from '@angular/core';
import { Story } from '../../_interfaces/story.interface';

@Component({
  selector: 'aitest-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  @Input() story: Story;

  constructor() { }

  ngOnInit() {
  }

}
