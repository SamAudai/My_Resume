import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})

export class NavigationComponent implements OnInit {

  names!: Array<string>;  //names!:string[];
  

  constructor() { }

  ngOnInit(): void {
    this.names = ['about', 'experience', 'education', 'skills', 'courses'];
  }
}