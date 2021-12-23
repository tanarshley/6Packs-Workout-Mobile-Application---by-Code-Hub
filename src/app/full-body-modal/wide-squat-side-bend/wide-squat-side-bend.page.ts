import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-wide-squat-side-bend',
  templateUrl: './wide-squat-side-bend.page.html',
  styleUrls: ['./wide-squat-side-bend.page.scss'],
})
export class WideSquatSideBendPage implements OnInit {

  constructor(private mdController: ModalController, private router: Router) {}

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
    this.router.navigate(['/wide-squat-calf-raise']);
  }
}
