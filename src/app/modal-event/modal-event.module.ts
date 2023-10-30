import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEventPageRoutingModule } from './modal-event-routing.module';

import { ModalEventPage } from './modal-event.page';
import { QRCodeModule } from 'angularx-qrcode';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEventPageRoutingModule,
    QRCodeModule
  ],
  declarations: [ModalEventPage]
})
export class ModalEventPageModule {}
