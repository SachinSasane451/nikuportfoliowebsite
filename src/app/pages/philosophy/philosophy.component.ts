import { Component } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-philosophy',
  templateUrl: './philosophy.component.html',
  styleUrls: ['./philosophy.component.css']
})
export class PhilosophyComponent {
data: any;
  constructor(private cs: ContentService) {
    this.cs.getData().subscribe(d => this.data = d);
  }
}
