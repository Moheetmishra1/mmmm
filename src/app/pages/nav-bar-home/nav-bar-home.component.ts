import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar-home',
  standalone: true,
  imports: [RouterLink ,NgIf],
  templateUrl: './nav-bar-home.component.html',
  styleUrl: './nav-bar-home.component.css'
})
export class NavBarHomeComponent {
  isVisibile=false;

  OnVisible(){
    this.isVisibile=!this.isVisibile
  }
}
