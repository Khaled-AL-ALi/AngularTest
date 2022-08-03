import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  data: any;

  constructor(private lib: LibraryService) { }

  ngOnInit(): void {

    this.lib.getBookDetails().subscribe(res => {
      console.log(res.response);
      this.data = res.response;
    });
  }

}
