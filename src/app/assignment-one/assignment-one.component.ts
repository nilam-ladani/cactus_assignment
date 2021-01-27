import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-assignment-one',
  templateUrl: './assignment-one.component.html',
  styleUrls: ['./assignment-one.component.scss']
})
export class AssignmentOneComponent implements OnInit {
  outputJson;
  headerform = this.fb.group({
    input: null,
    output: null,
  })

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  submitForm(data) {
    var obj = JSON.parse(data.input);
    for (let index = Object.keys(obj).length - 1; index >= 0; index--) {
      const elements = obj[index];
      const parents = obj[index - 1];
      elements.forEach(element => {
        // find parent
        if (parents) {
          const parent = parents.find(parent => parent.id === element.parent_id);
          parent.children.push(element);
        }
      });
    }
    this.outputJson = JSON.stringify(obj['0'], undefined, 2);
  }
}
