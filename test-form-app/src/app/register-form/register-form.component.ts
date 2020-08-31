import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  phonenumbers: Array<string> = ['+359', '+721', '+123']
  @ViewChild('form')
  htmlForm: NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  register(formData) {
    if(!this.htmlForm.invalid) {
      this.htmlForm.reset()
    }
    
  }

}
