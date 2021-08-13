import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSurligner]'
})
export class SurlignerDirective {

  constructor(
    //injection ElementRef permet d'accéder à l'élément "el" appelant la directive
    private el : ElementRef
  ) { }
  //le décorateur écoute et réagit. Quand la souris passe à un endroit, appel de la méthode Surligner en rouge
  @HostListener('mouseenter') mouseEnter() {
    this.surligner('red')
  }

  @HostListener('mouseleave') mouseLeave() {
    this.surligner('')
  }
  //Faire en sorte que cette méthode donne un backgroundColor donné par paramètre
  private surligner(color : string) {
    this.el.nativeElement.style.backgroundColor = color
  }
}
