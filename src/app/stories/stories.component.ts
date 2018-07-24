import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { AlgoliaService } from '../_services/algolia.service';
import { Story } from '../_interfaces/story.interface';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'aitest-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})

export class StoriesComponent implements OnInit {
  private allStories: Story[] = [];
  private stories: Story[] = [];
  private searchTerm: string = '';
  private currentStory: Story;
  @ViewChild('template') content: ElementRef;

  modalRef: BsModalRef;

  constructor(private _algoliaService: AlgoliaService, private modalService: BsModalService) { }

  ngOnInit() {
    this.getStories();
    setInterval(()=>{ this.getStories(); }, 10000);
  }

  getStories() {
    this._algoliaService.getNewStories().subscribe((stories: Story[] ) => {
      this.allStories = this.stories = stories['hits'];
      console.log(this.allStories);
    });
  }

  filterStories() {
    if(this.searchTerm.length) {
      this.stories = this.allStories.filter((story)=> story.title.toLowerCase().includes(this.searchTerm.trim().toLowerCase()))  
    } else {
      this.stories = this.allStories;
    }
    
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(this.content);
  }

  updateStory(story: Story) {
    this.currentStory = story;
    this.modalRef = this.modalService.show(this.content);
  }

}
