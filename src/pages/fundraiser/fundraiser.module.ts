import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FundraiserPage } from './fundraiser';

@NgModule({
  declarations: [
    FundraiserPage,
  ],
  imports: [
    IonicPageModule.forChild(FundraiserPage),
  ],
})
export class FundraiserPageModule {}
