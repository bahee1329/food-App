import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  searchTerm: string = '';
  constructor(private activeRoute: ActivatedRoute, private Router: Router) {
    this.activeRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.searchTerm = params.searchTerm;
      }
    });
  }

  search(term: string): void {
    if (term) {
      this.Router.navigateByUrl('/search/' + term);
    }
  }
}
