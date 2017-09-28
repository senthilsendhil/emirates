import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<nav class='navbar navbar-default'>
    <div class='navbar-header'>
     
      <a href='#' class='navbar-brand'> {{heading}}</a>
    </div>
    <ul class="nav navbar-nav">
      <li><a routerLink="/"> Home </a></li>
      <li><a routerLink="/list"> List </a></li>
      <li><a routerLink="/manage"> Manage Product</a></li>
    </ul>

  </nav>`
})
export class HeaderComponent {
  heading:string = 'Shopping APP From Component'
}
