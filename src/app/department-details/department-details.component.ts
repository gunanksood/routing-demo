import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-department-details',
  template: `
    <p>
      department-details works! {{departmentId}}
    </p>
  `,
  styles: []
})
export class DepartmentDetailsComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }
public departmentId ;
  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.departmentId = id;
  }

}
