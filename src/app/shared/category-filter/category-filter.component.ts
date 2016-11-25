import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Category } from '../../shared/category.model';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss']
})
export class CategoryFilterComponent {
  @Input() categories: Category[];
  @Input() selected: Category;
  @Output() onSelected = new EventEmitter<Category>();
  isCollapsed = true;

  select(category: Category) {
    this.isCollapsed = true;
    this.onSelected.emit(category);
  }

  isSelectedCategory(category: Category): boolean {
    return category === this.selected;
  }
}
