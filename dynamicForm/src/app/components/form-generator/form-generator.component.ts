import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormField } from 'src/app/interfaces/form-field';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent implements OnInit {
  @Input() formFieldsData: FormField[] | undefined;
  form: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    if(this.formFieldsData) {
      this.createForm();
    }
  }

  createForm() {
    this.formFieldsData?.forEach(fm => {
      this.form.addControl(fm.fieldLabel, this.fb.control(fm.userAns,fm.required ? Validators.required : null))
    })
    console.log(this.form);
  }

}
