import { Component, OnInit } from '@angular/core';
import { CounterService } from '../shared/counter.service';

@Component({
  selector: 'app-eager',
  templateUrl: './eager.component.html',
  styleUrls: ['./eager.component.scss'],
})
export class EagerComponent implements OnInit {
  constructor(public counterService: CounterService) {}

  ngOnInit(): void {}

  public increaseCounter = () => (this.counterService.counter += 1);
}
