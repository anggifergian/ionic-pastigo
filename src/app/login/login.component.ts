import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../app.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class LoginComponent  implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {}

  handleLogin() {
    this.router.navigate(['/tabs/home'])
  }
}
