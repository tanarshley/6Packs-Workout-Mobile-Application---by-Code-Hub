import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-squat-modal',
  templateUrl: './squat-modal.page.html',
  styleUrls: ['./squat-modal.page.scss'],
})
export class SquatModalPage implements OnInit {

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
    this.mdController.dismiss();
    this.router.navigate(['/push-up-modal']);
  }
}
