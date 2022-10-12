import { Component } from '@angular/core';
import { FormField } from './interfaces/form-field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamicForm';
  formData: FormField[] = [
    {
    fieldLabel: 'field1',
    inputType: 'text',
    required: true,
    userAns: 'ans1'
  },
  {
    fieldLabel: 'field2',
    inputType: 'text',
    required: false,
    userAns: ''
  },
]
}
