import { Component, OnInit } from '@angular/core';

import { Category } from '../shared/category.model';
import { ProgramData } from './shared/program-data.model';
import { Program } from './shared/program.model';
import { ProgramService }  from './shared/program.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html'
})
export class ProgramsComponent implements OnInit {
  title = 'Programs';

  data: ProgramData;

  filteredPrograms: Program[];
  _selectedCategory: Category;

  constructor(
    private service: ProgramService
  ) {}

  ngOnInit() {
    this.service.getPrograms().subscribe(data => {
      this.data = data;
      this.selectedCategory = data.categories[0];
    });
  }

  onCategorySelected(category: Category) {
    this.selectedCategory = category;
  }

  get selectedCategory() {
    return this._selectedCategory;
  }

  set selectedCategory(category: Category) {
    this._selectedCategory = category;

    if (category.type === 'ALL') {
      this.filteredPrograms = this.data.programs;
      return;
    }

    this.filteredPrograms = this.data.programs.filter(
      program => program.type.find(type => type === category.type));
  }
}
