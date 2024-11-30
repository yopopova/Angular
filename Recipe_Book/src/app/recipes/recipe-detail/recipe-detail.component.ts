import { Component, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input() recipe = {} as Recipe;

  constructor(private recipeService: RecipeService) {}

  onAddToshoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }
}
