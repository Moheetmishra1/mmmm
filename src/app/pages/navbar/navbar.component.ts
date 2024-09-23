import { Component } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { LogoComponent } from "../../logo/logo.component";
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ RouterLink,LogoComponent,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
