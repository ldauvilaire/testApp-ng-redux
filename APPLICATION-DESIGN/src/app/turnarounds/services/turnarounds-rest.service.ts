import { Injectable } from '@angular/core';

import { Turnaround } from './../model/turnaround.model';
import { TURNAROUNDS } from './../constants/turnarounds.constants';

const FETCH_LATENCY = 500;

@Injectable()
export class TurnaroundsRestService {

  getTurnarounds() {
    return new Promise<Turnaround[]>(resolve => {
      setTimeout(() => { resolve(TURNAROUNDS); }, FETCH_LATENCY);
    });
  }

  getTurnaround(id: number | string) {
    return this.getTurnarounds()
      .then(turnarounds => turnarounds.find(turnaround => turnaround.id === +id));
  }

}
