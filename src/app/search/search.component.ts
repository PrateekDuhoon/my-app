import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm!: FormGroup;
  searchResults: string[] = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchQuery: ['']
    });

    this.searchForm.controls['searchQuery'].valueChanges
      .pipe(
        debounceTime(600),
        distinctUntilChanged()
      )
      .subscribe((query: string) => {
        this.search(query);
      });
  }

  search(query: string): void {
    // Perform the search operation here and update searchResults
    // For demonstration purposes, let's simulate the search results with a static array
    this.searchResults = ['Result 1', 'Result 2', 'Result 3'];
  }
}
