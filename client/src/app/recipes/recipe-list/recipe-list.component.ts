import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[] = [
    new Recipe('Bouillabaisse', 'La bouillabaisse est une spécialité culinaire traditionnelle et institutionnelle de la cuisine de la Provence méditerranéenne', 'https://img.freepik.com/free-photo/seafood-casserole-with-toasts_140725-841.jpg?w=740&t=st=1688562853~exp=1688563453~hmac=64ff8bc3f12bbadb88ff0568f54ac9b9073961e45a55cbbe910d03989f12bb2d')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
