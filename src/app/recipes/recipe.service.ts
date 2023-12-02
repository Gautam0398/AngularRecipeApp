import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService{
     
    recipeSelected = new Subject<Recipe>();
    recipesChanged = new Subject<Recipe[]>();
    constructor(private slService : ShoppingListService){}
    
     
    // private recipes: Recipe[] = [
    //     new Recipe("Kadhdai Paneer","A authentic sautè Paneer filled with tomato gravy ","https://thekitchencommunity.org/wp-content/uploads/2022/02/filipino-recipe.jpg",
    //     [
    //       new Ingredient('Paneer',9),
    //       new Ingredient('tomato',2),
    //       new Ingredient('onion paste',1)

    //     ]),
    //     new Recipe("Amritsari Chole","spicy chana filled with gravy","https://ranveerbrar.com/wp-content/uploads/2021/02/LOGO-CHOLE-1-640x385.jpg",
    //     [
    //       new Ingredient('Paneer',9),
    //       new Ingredient('tomato',2),
    //       new Ingredient('onion paste',1)

    //     ]),
    //     new Recipe("Veg Burger","Newyork's finest Juicy Burger","https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Vegetable-Deluxe-2:product-header-desktop?wid=829&hei=455&dpr=off",
    //     [
    //       new Ingredient('Bun',2),
    //       new Ingredient('tomato',2),
    //       new Ingredient('onion',1),
    //       new Ingredient('cabbage',1),
    //       new Ingredient('mustarte sauce',1),



    //     ]),
    //     new Recipe("Malai Kofta","Authentic Malai Kofta filled with ancient spices","https://www.subbuskitchen.com/wp-content/uploads/2016/07/Malai-Kofta_web1-1300x867.jpg",
    //     [
    //       new Ingredient('Bun',2),
    //       new Ingredient('tomato',2),
    //       new Ingredient('onion',1),
    //       new Ingredient('cabbage',1),
    //       new Ingredient('mustarte sauce',1),



    //     ])
    //   ];

    private recipes : Recipe[];

      setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }

      getRecipes(){
        return this.recipes.slice();
      }

      getRecipe(index: number){
        return this.recipes[index];
      }

      addIngredientToShoppingList(ingredients: Ingredient[]){
          this.slService.addIngredients(ingredients);
      }


      addRecipe(recipe:Recipe){
          this.recipes.push(recipe);
          this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number){

        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number,newRecipe : Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());

      }
}