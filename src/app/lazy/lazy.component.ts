import { Component, OnInit } from '@angular/core';
import { CounterService } from '../shared/counter.service';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss'],
})
export class LazyComponent implements OnInit {
  constructor(public counterService: CounterService) {}

  ngOnInit(): void {}

  public increaseCounter = () => (this.counterService.counter += 1);
}
