import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
	selector: 'food-list',
	template: `
		<div class="container">

			<div class='box'>
				<h2>Today's Eaten Foods</h2>
				<hr>
				<table class='table table-striped'>
					<thead>
						<th>Name</th>
						<th>Details</th>
						<th>Calories</th>
					</thead>
					<tbody>
						<tr (click)="showMore(food)" class='food' *ngFor = "let food of foods">
							<td>{{ food.name }}</td>
							<td>{{ food.details }}</td>
							<td>{{ food.calories }}</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div class='box group' id='my-label'>
				<label (click) = "newFood()" class='label label-primary'>Log Food</label>
				<label (click) = "showMore(foods[0])" class='label label-info'>Edit Food</label>
				<label (click) = "more500()" class='label label-danger'>Food More than 500 Cal</label>
				<label (click) = "less500()" class='label label-warning'>Food Less than 500 Cal</label>
			</div>

			<div class='box' *ngIf = "selectedFood">
				<h3>Edit Today Eaten Food</h3>
				<hr>
				<div id='edit-holder' class='group'>
					<div class='item'>
						<label>Food Name</label><br>
						<input [(ngModel)]="selectedFood.name">
					</div>
					<div class='item'>
						<label>Food calories</label><br>
						<input [(ngModel)]="selectedFood.calories">
					</div>
					<div class='item itemdesc'>
						<label>Food Description</label>
						<input [(ngModel)]="selectedFood.details">
					</div>
					<div class='item itemdesc'>
						<button (click)="finishedEditing()" class='btn btn-warning btn-block'>Done Editing Close!</button>
					</div>
				</div>
			</div>

			<div class='box' *ngIf = "showForm">
				<h3>Log Today Eaten Food</h3>
				<hr>
				<div id='edit-holder' class='group'>
					<div class='item'>
						<label>Food Name</label><br>
						<input #newName>
					</div>
					<div class='item'>
						<label>Food calories</label><br>
						<input #newCalories>
					</div>
					<div class='item itemdesc'>
						<label>Food Description</label>
						<input #newDescription>
					</div>
					<div class='item itemdesc'>
						<button (click)="finishedAdding(newName.value, newDescription.value, newCalories.value); newName.value=''; newDescription.value=''; newCalories.value=''" class='btn btn-success btn-block'>Done Adding Close!</button>
					</div>
				</div>
			</div>
		</div>
	`
})

export class AppComponent {
	foods: Food[] = [
		new Food("Flies", "Lunch at famous place", "154"),
		new Food("Meat", "A very large piece of meat", "90"),
		new Food("Soda", "Cocacola sprite energy drink", "134")
	]
	
	// show hide edit form
	selectedFood: Food = null;

	showMore(clickedFood: Food) {
		this.showForm = false;
		this.selectedFood = clickedFood;
	}

	finishedEditing(){
		this.selectedFood = null;
	}

	// show hide log form
	showForm = null;

	newFood(){
		this.selectedFood = null;
		this.showForm = "1";
	}

	finishedAdding(name: string, details: string, calories: string) {

		var newFoodAdd: Food = new Food(name, details, calories);

		// alert(newFoodAdd.name);
		this.foods.push(newFoodAdd);
		this.showForm = null;
	}

	// more500() {
	// 	this.foods.
	// }
}