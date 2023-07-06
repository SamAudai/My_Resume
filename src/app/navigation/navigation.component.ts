import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})

export class NavigationComponent implements OnInit {

  names!: Array<string>;  //names!:string[];
  isMenuOpen: boolean = false;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.names = ['about', 'experience', 'education', 'skills', 'courses'];
  }

  hideNavbarCollapse() {
    const navbarCollapse = this.elementRef.nativeElement.querySelector('.navbar-collapse');
    if (navbarCollapse) {
      navbarCollapse.classList.remove('show');
    }
  }
}