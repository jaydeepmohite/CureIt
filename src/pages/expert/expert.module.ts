import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpertPage } from './expert';

@NgModule({
  declarations: [
    ExpertPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpertPage),
  ],
})
export class ExpertPageModule {}
