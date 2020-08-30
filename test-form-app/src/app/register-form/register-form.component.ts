import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  phonenumbers: Array<string> = ['+359', '+721', '+123']
  constructor() { }

  ngOnInit(): void {
  }

  register(formData) {
    console.log(formData);
    
  }

}
