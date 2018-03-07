import { Component, OnInit } from '@angular/core';
import { ValuesService } from '../services/values.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ValuesService]
})
export class HomeComponent implements OnInit {

  constructor(private valuesService : ValuesService) { }

  ngOnInit() {
    this.valuesService.getValueList();
  }

}
