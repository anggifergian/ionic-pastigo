import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dialog } from '@capacitor/dialog';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss', '../app.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class AccountComponent  implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {}

  async showExitDialog() {
    const { value: confirmLogout } = await Dialog.confirm({
      title: "Keluar dari Abang Express Kurir.",
      message: "Apakah Anda yakin ingin keluar?",
    })

    if (confirmLogout) {
      this.router.navigate(['/login'])
    }
  }

}
