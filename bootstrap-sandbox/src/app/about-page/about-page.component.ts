import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css'],
})
export class AboutPageComponent {
  sidebarStyle = {
    width: '0',
  };

  constructor(private elementRef: ElementRef) {}

  openNav() {
    this.sidebarStyle = {
      width: '250px',
    };
    this.addOutsideClickListener();
  }

  closeNav() {
    this.sidebarStyle = {
      width: '0',
    };
    this.removeOutsideClickListener();
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    const isClickedInside = this.elementRef.nativeElement.contains(
      event.target
    );
    if (!isClickedInside) {
      this.closeNav();
    }
  }

  private addOutsideClickListener() {
    document.addEventListener('click', this.onClick.bind(this));
  }

  private removeOutsideClickListener() {
    document.removeEventListener('click', this.onClick.bind(this));
  }
}
