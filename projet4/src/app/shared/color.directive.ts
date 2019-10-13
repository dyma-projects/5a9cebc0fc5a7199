import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appCouleur]'
})

export class ColorDirective implements OnInit {
  private couleur = 'black';
  private key = 0;

  @HostListener('window:keyup', ['$event']) keyEvent(event: KeyboardEvent) {
    this.key = event.keyCode;

    if (this.key === 37) {
      this.couleur = 'blue';
    } else if (this.key === 38) {
      this.couleur = 'red';
    } else if (this.key === 39) {
      this.couleur = 'yellow';
    } else if (this.key === 40) {
      this.couleur = 'green';
    } else {
      this.couleur = 'black';
    }

    this.renderer.setStyle(this.el.nativeElement, 'color', this.couleur);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
  }
}
