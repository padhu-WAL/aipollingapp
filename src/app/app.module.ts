import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoriesComponent } from './stories/stories.component';
import { StoryComponent } from './stories/story/story.component';

import { AlgoliaService } from './_services/algolia.service';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    StoriesComponent,
    StoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [ AlgoliaService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
