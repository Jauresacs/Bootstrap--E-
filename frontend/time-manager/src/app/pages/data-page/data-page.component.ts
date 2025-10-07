import {Component, inject, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import { DataService } from '../../services/data.service';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-data-page',
  imports: [
    RouterLink,
    JsonPipe,
  ],
  templateUrl: './data-page.component.html',
  styleUrl: './data-page.component.scss'
})
export class DataPage implements OnInit {
  protected data: any;

  private readonly dataService: DataService = inject(DataService);

  ngOnInit() {
    this.dataService.getData().subscribe({
      next: (response) => {
        this.data = response;
      },
      error: (err) => {
        this.data = 'Erreur lors du chargement';
        console.error(err);
      }
    });
  }
}
