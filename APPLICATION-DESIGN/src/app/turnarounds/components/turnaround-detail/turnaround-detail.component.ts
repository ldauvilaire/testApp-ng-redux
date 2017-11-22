import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-turnaround-detail',
  templateUrl: './turnaround-detail.component.html',
  styleUrls: ['./turnaround-detail.component.scss']
})
export class TurnaroundDetailComponent implements OnInit {
  id: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
  }

}
