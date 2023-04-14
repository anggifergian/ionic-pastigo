import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../app.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class HomeComponent  implements OnInit {
  isChecked = false;

  constructor() { }

  ngOnInit() {}

}
