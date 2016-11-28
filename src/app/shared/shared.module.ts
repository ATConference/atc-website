import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TranslateModule } from 'ng2-translate';

import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { LanguageSelectComponent } from './language-select/language-select.component';
import { LocalePipe } from './locale.pipe';
import { SafePipe } from './safe.pipe';
import { SplitPipe } from './split.pipe';
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
    SplitPipe,
    LocalePipe
  ],
  exports: [
    CommonModule,
    NgbModule,
    TranslateModule,
    CategoryFilterComponent,
    ImageSliderComponent,
    LanguageSelectComponent,
    YoutubeVideoComponent,
    SafePipe,
    SplitPipe,
    LocalePipe
  ]
})
export class SharedModule { }
