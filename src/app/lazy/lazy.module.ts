import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LazyComponent } from './lazy.component';

@NgModule({
  declarations: [LazyComponent],
  imports: [CommonModule, SharedModule, LazyRoutingModule],
})
export class LazyModule {}
