import { Component } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent {
data: any;
  constructor(private cs: ContentService) {
    this.cs.getData().subscribe(d => this.data = d);
  }
}
