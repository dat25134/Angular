import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { FontSizesEditorComponent } from './font-sizes-editor/font-sizes-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizesEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
