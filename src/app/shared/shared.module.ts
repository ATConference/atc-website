import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TranslateModule } from 'ng2-translate';

import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { LanguageSelectComponent } from './language-select/language-select.component';
import { LocalePipe } from './locale.pipe';
import { NavbarService } from './navbar.service';
import { SafePipe } from './safe.pipe';
import { YoutubeVideoComponent } from './youtube-video/youtube-video.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [
    CategoryFilterComponent,
    ImageSliderComponent,
    LanguageSelectComponent,
    YoutubeVideoComponent,
    SafePipe,
    LocalePipe,
  ],
  exports: [
    CommonModule,
    TranslateModule,
    CategoryFilterComponent,
    ImageSliderComponent,
    LanguageSelectComponent,
    YoutubeVideoComponent,
    SafePipe,
    LocalePipe
  ],
  providers: [
    NavbarService
  ]
})
export class SharedModule { }
