import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: false }) nameInputRef!: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInput!: ElementRef; // Doesn't work without ! sign.

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;

    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
