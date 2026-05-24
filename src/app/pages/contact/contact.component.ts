import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContentService } from 'src/app/services/content.service';
import emailjs from '@emailjs/browser';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: any;

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    message: ['', Validators.required]
  });

  constructor(
    private langService: LanguageService,
    private cs: ContentService,
    private fb: FormBuilder
  ) {}

lang = 'en';






  ngOnInit(): void {
     this.langService.language$.subscribe(l => this.lang = l);
    this.cs.getData().subscribe(data => {
      this.contact = data.contact;
    });

    emailjs.init('cWgtOg-c0bUccWJre'); // later
  }

  submitForm() {
    if (this.contactForm.invalid) return;

    emailjs.send(
      'service_0enoqcd',
      'template_hqa2ren',
      this.contactForm.value
    ).then(() => {
      alert('Message sent successfully!');
      this.contactForm.reset();
    }).catch(() => {
      alert('Something went wrong!');
    });
  }
}
