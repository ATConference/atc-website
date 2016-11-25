import { Component, OnInit } from '@angular/core';

import { Category } from '../shared/category.model';
import { ParticipantData } from './shared/participant-data.model';
import { Participant } from './shared/participant.model';
import { ParticipantService }  from './shared/participant.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html'
})
export class ParticipantsComponent implements OnInit {
  title = 'Participants';

  data: ParticipantData;

  filteredParticipants: Participant[];
  _selectedCategory: Category;

  constructor(
    private service: ParticipantService
  ) {}

  ngOnInit() {
    this.service.getParticipants().subscribe(data => {
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
      this.filteredParticipants = this.data.participants;
      return;
    }

    this.filteredParticipants = this.data.participants.filter(
      participant => participant.type.find(type => type === category.type));
  }
}
