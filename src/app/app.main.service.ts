import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()

export class MainService {
  constructor(private http:HttpClient) {
  }

  getData() {
    return this.http.get('http://www.hot2z.com/api/v1.0/043b78acbe6027eb241b4264ada87bfdc0b90545/?');
  }
}
