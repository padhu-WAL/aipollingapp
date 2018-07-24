import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Story } from '../../_interfaces/story.interface';
import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'aitest-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StoryComponent implements OnInit {
  @Input() story: Story;
  @Output() updateCurrentStory = new EventEmitter<Story>();

  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }


  openModal() {
    this.updateCurrentStory.emit(this.story);
  }


}
