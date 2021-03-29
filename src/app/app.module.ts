import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgAmpModule } from 'ng-amp';
import { AzureUploaderComponent } from './azureUploader/azure-uploader/azure-uploader.component';

@NgModule({
  declarations: [
    AppComponent,
    AzureUploaderComponent
  ],
  imports: [
    BrowserModule,
    NgAmpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
