import { Injectable } from '@angular/core';
import { colorEntity } from '../Entity/colorEntity';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }

  GetColorList():colorEntity[] {
    return [
      {code: 'c0', name: 'Black'},
      {code: 'c1', name: 'Red'},
      {code: 'c2', name: 'Green'},
      {code: 'c3', name: 'Blue'},
      {code: 'c4', name: 'White'}
    ]
  }
}
