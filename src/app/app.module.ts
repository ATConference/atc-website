import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TranslateLoader, TranslateModule, TranslateStaticLoader } from 'ng2-translate';

import { AppRoutingModule } from './app-routing.module';
import { ArchivesModule } from './archives/archives.module';
import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.module';
import { ParticipantsModule } from './participants/participants.module';
import { ProgramsModule } from './programs/programs.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

const translateLoader = {
  provide: TranslateLoader,
  useFactory: createTranslateLoader,
  deps: [ Http ]
};

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    TranslateModule.forRoot(translateLoader),
    CoreModule,
    SharedModule,
    AppRoutingModule,
    ProgramsModule,
    ParticipantsModule,
    PagesModule,
    ArchivesModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
