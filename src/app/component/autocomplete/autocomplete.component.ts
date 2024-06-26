import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { MasterService } from '../../service/master.service';
import { colorEntity } from '../../Entity/colorEntity';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.css'
})
export class AutocompleteComponent implements OnInit {

  colorArray: string[] = ['Red', 'Green', 'Blue'];
  filterOptions!: Observable<string[]>;
  formControl = new FormControl('');

  colorArrayList!: colorEntity[];
  filterOptionList!: Observable<colorEntity[]>;

  constructor(private service: MasterService) {
    this.colorArrayList = service.GetColorList();
  }

  ngOnInit(): void {
    //this.filterOptions = this.formControl.valueChanges.pipe(
    //  startWith(''), map((value) => this._FILTER(value || ''))
    //)

    this.filterOptionList = this.formControl.valueChanges.pipe(
      startWith(''), map((value) => this.LIST_FILTER(value || ''))
    )
  }

  private _FILTER(value: string) :string[] {
    const searchvalue = value.toLocaleLowerCase();
    return this.colorArray.filter(option=>option.toLocaleLowerCase().includes(searchvalue));

  }

  private LIST_FILTER(value: string) :colorEntity[] {
    const searchvalue = value.toLocaleLowerCase();
    return this.colorArrayList.filter(option=>option.name.toLocaleLowerCase().includes(searchvalue) || option.code.toLocaleLowerCase().includes(searchvalue));

  }
}
