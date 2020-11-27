import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService, UserServiceConfig } from './counter.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class SharedModule {
  static forRoot(
    config?: UserServiceConfig
  ): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [CounterService],
    };
  }
}
