import { Component } from '@angular/core';
import { FoodapiService } from '../../../service/foodapi.service';
import { FoodItems } from '../../../Types';
import { RatingModule } from 'ng-starrating';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SearchComponent } from '../../partials/search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [RouterModule, SearchComponent],
})
export class HomeComponent {
  constructor(
    private foodapi: FoodapiService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.foodItems = this.foodapi.getProductForSearch(params.searchTerm);
        console.log('search');
      } else {
        this.foodItems = this.foodapi.getAll();
      }
    });
  }

  foodItems: FoodItems[] = [];
}
