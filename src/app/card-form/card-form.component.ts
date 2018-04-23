import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

import { Card } from "../models/card";

@Component({
  selector: "app-card-form",
  templateUrl: "./card-form.component.html",
  styleUrls: ["./card-form.component.css"]
})
export class CardFormComponent {

  @ViewChild("cardForm") cardForm: NgForm;

  private card: Card;

  constructor() { }

  public onSubmit() {
    // TODO: write unit tests
    // TODO: research stripe API or something similar
    // TODO: look at checkout/card forms for other places
    console.log(this.cardForm.value);
  }

}
