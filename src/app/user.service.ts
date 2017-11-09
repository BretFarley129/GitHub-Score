import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {
  private username;
  constructor(private _http: Http) { }

  getUserInfo = function(username){
    return this._http.get(`https://api.github.com/users/${username}`)
  }
}
