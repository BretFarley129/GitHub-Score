import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {UserService} from './../user.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-git-comp',
  templateUrl: './git-comp.component.html',
  styleUrls: ['./git-comp.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GitCompComponent implements OnInit {
  username;
  score;
  constructor(private _userService: UserService) { }
  onSubmit(){
    this._userService.getUserInfo(this.username)
      .subscribe(
        (response) => {
          this.score = response.json()['public_repos']+response.json()['followers'];
          console.log(this.score);
          //calculate github score
        },
        (err) => {console.log(err);}
      );
      this.username = undefined;
  }
  ngOnInit() {
  }

}
