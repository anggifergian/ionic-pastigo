import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-exit-dialog',
  templateUrl: './exit-dialog.component.html',
  styleUrls: ['./exit-dialog.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class ExitDialogComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
