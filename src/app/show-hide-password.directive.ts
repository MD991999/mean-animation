import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appShowHidePassword]'
})
export class ShowHidePasswordDirective {

  
  constructor(private el: ElementRef) {
    this.setup();
  }

  setup() {
    // Get the password input element
    const passwordInput = this.el.nativeElement;
console.log(passwordInput)
    // Create the show/hide password button
    const button = document.createElement('button');
    button.innerHTML = `<i class="fa fa-eye"></i>`;
    button.type = 'button';
    // button.style.width="200"
    button.style.transform='translateX(-30px)'
    button.addEventListener('click', () => {
      // Toggle the type attribute of the password input element
      passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
      // Toggle the button icon
      button.innerHTML = passwordInput.type === 'password' ? `<i class="fa fa-eye"></i>` : `<i class="fa fa-eye-slash"></i>`;
    });

    // Append the button to the password input element's parent
    passwordInput.parentNode.insertBefore(button, passwordInput.nextSibling);
  }

}
