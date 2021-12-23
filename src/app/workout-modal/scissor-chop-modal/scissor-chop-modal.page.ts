import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scissor-chop-modal',
  templateUrl: './scissor-chop-modal.page.html',
  styleUrls: ['./scissor-chop-modal.page.scss'],
})
export class ScissorChopModalPage implements OnInit {

  constructor(private mdController: ModalController, private router: Router) {

  }

  ngOnInit() {
  }

  closeModal()
  {
    this.mdController.dismiss();
    this.router.navigate(['/tabs/workout']);
  }

  exitExercise(){
    this.router.navigate(['/tabs/workout']);
  }

  nextExercise(){
    this.router.navigate(['/arm-scissor-modal']);
  }
}
