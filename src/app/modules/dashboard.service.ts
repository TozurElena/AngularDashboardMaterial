import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart() {
    return
  }

  cards() {
    return [71, 65, 38, 66];
  }

  pieChart() {
    return     [{
      name: 'Chrome',
      y: 70.67,
      sliced: true,
      selected: true
    }, {
      name: 'Edge',
      y: 14.77
    }, {
      name: 'Firefox',
      y: 4.86
    }, {
      name: 'Safari',
      y: 2.63
    }, {
      name: 'Internet Explorer',
      y: 1.53
    }, {
      name: 'Opera',
      y: 1.40
    }, {
      name: 'Sogou Explorer',
      y: 0.84
    }, {
      name: 'QQ',
      y: 0.51
    }, {
      name: 'Other',
      y: 2.6
    }
    ];
  }
}
