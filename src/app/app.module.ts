import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GitCompComponent } from './git-comp/git-comp.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    GitCompComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
