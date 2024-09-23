import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-Comp',
  standalone: true,
  imports: [],
  templateUrl: './button-comp.component.html',
  styleUrl: './button-comp.component.css'
})
export class ButtonCompComponent {
  @Input({required:true}) title!:string;
  @Input({required:true}) custom!:string;
}
