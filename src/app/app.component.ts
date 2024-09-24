import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { NavBarHomeComponent } from './pages/nav-bar-home/nav-bar-home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,NavBarHomeComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bazaar';
  @ViewChild('hiddenNav') hiddenNav ?:ElementRef<NavbarComponent>;
  // private scrollNav= viewChild('scrollNav')

  showNav(){
    console.log("enter");
    // console.log(Object.keys(this.hiddenNav));
   
  }
    
}
