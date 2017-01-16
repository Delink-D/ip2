"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var food_model_1 = require("./food.model");
var AppComponent = (function () {
    function AppComponent() {
        this.foods = [
            new food_model_1.Food("Flies", "Lunch at famous place", "154"),
            new food_model_1.Food("Meat", "A very large piece of meat", "90"),
            new food_model_1.Food("Soda", "Cocacola sprite energy drink", "134")
        ];
        // show hide edit form
        this.selectedFood = null;
        // show hide log form
        this.showForm = null;
        // more500() {
        // 	this.foods.
        // }
    }
    AppComponent.prototype.showMore = function (clickedFood) {
        this.showForm = false;
        this.selectedFood = clickedFood;
    };
    AppComponent.prototype.finishedEditing = function () {
        this.selectedFood = null;
    };
    AppComponent.prototype.newFood = function () {
        this.selectedFood = null;
        this.showForm = "1";
    };
    AppComponent.prototype.finishedAdding = function (name, details, calories) {
        var newFoodAdd = new food_model_1.Food(name, details, calories);
        // alert(newFoodAdd.name);
        this.foods.push(newFoodAdd);
        this.showForm = null;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'food-list',
        template: "\n\t\t<div class=\"container\">\n\n\t\t\t<div class='box'>\n\t\t\t\t<h2>Today's Eaten Foods</h2>\n\t\t\t\t<hr>\n\t\t\t\t<table class='table table-striped'>\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<th>Name</th>\n\t\t\t\t\t\t<th>Details</th>\n\t\t\t\t\t\t<th>Calories</th>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr (click)=\"showMore(food)\" class='food' *ngFor = \"let food of foods\">\n\t\t\t\t\t\t\t<td>{{ food.name }}</td>\n\t\t\t\t\t\t\t<td>{{ food.details }}</td>\n\t\t\t\t\t\t\t<td>{{ food.calories }}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\n\t\t\t<div class='box group' id='my-label'>\n\t\t\t\t<label (click) = \"newFood()\" class='label label-primary'>Log Food</label>\n\t\t\t\t<label (click) = \"showMore(foods[0])\" class='label label-info'>Edit Food</label>\n\t\t\t\t<label (click) = \"more500()\" class='label label-danger'>Food More than 500 Cal</label>\n\t\t\t\t<label (click) = \"less500()\" class='label label-warning'>Food Less than 500 Cal</label>\n\t\t\t</div>\n\n\t\t\t<div class='box' *ngIf = \"selectedFood\">\n\t\t\t\t<h3>Edit Today Eaten Food</h3>\n\t\t\t\t<hr>\n\t\t\t\t<div id='edit-holder' class='group'>\n\t\t\t\t\t<div class='item'>\n\t\t\t\t\t\t<label>Food Name</label><br>\n\t\t\t\t\t\t<input [(ngModel)]=\"selectedFood.name\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='item'>\n\t\t\t\t\t\t<label>Food calories</label><br>\n\t\t\t\t\t\t<input [(ngModel)]=\"selectedFood.calories\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='item itemdesc'>\n\t\t\t\t\t\t<label>Food Description</label>\n\t\t\t\t\t\t<input [(ngModel)]=\"selectedFood.details\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='item itemdesc'>\n\t\t\t\t\t\t<button (click)=\"finishedEditing()\" class='btn btn-warning btn-block'>Done Editing Close!</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class='box' *ngIf = \"showForm\">\n\t\t\t\t<h3>Log Today Eaten Food</h3>\n\t\t\t\t<hr>\n\t\t\t\t<div id='edit-holder' class='group'>\n\t\t\t\t\t<div class='item'>\n\t\t\t\t\t\t<label>Food Name</label><br>\n\t\t\t\t\t\t<input #newName>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='item'>\n\t\t\t\t\t\t<label>Food calories</label><br>\n\t\t\t\t\t\t<input #newCalories>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='item itemdesc'>\n\t\t\t\t\t\t<label>Food Description</label>\n\t\t\t\t\t\t<input #newDescription>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='item itemdesc'>\n\t\t\t\t\t\t<button (click)=\"finishedAdding(newName.value, newDescription.value, newCalories.value); newName.value=''; newDescription.value=''; newCalories.value=''\" class='btn btn-success btn-block'>Done Adding Close!</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.components.js.map