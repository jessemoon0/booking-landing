import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './sidebar/main/main.component';
import { ImagesComponent } from './sidebar/main/images/images.component';
import { TitleComponent } from './sidebar/main/title/title.component';
import { ContentComponent } from './sidebar/main/content/content.component';
import { ButtonInlineComponent } from './shared/button-inline/button-inline.component';
import { DescriptionComponent } from './sidebar/main/content/description/description.component';
import { ReviewComponent } from './sidebar/main/content/review/review.component';
import { ButtonChangeTextOnHoverComponent } from './shared/button-change-text-on-hover/button-change-text-on-hover.component';
import { MenuComponent } from './shared/components/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    ImagesComponent,
    TitleComponent,
    ContentComponent,
    ButtonInlineComponent,
    DescriptionComponent,
    ReviewComponent,
    ButtonChangeTextOnHoverComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
