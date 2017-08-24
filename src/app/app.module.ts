import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdSelectModule } from '@angular/material';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MaterialModule} from '@angular/material';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { AuthorComponent } from './author/author.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    MdSelectModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
