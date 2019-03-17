import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { MiddlePanelComponent } from './middle-panel/middle-panel.component';
import { ImageComponent } from './middle-panel/postcard/image/image.component';
import { TextComponent } from './middle-panel/postcard/text/text.component';
import { QuestComponent } from './middle-panel/postcard/quest/quest.component';
import { PostcardComponent } from './middle-panel/postcard/postcard.component';
import { CommentsComponent } from './middle-panel/postcard/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftPanelComponent,
    RightPanelComponent,
    MiddlePanelComponent,
    ImageComponent,
    TextComponent,
    QuestComponent,
    PostcardComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
