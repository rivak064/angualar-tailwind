import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-development",
  templateUrl: "./development.component.html",
  styleUrls: ["./development.component.scss"],
})
export class DevelopmentComponent implements OnInit {
  constructor() {}
  isShowLink1 = true;
  isShowLink2 = false;
  isShowLink3 = false;
  isShowLink4 = false;
  isShowLink5 = false;
  isShowLink6 = false;
  isShowLink7 = false;
  ngOnInit() {}

  toggleLink1() {
    this.isShowLink1 = true;
    this.isShowLink2 = false;
    this.isShowLink3 = false;
    this.isShowLink4 = false;
    this.isShowLink5 = false;
    this.isShowLink6 = false;
    this.isShowLink7 = false;
  }
  toggleLink2() {
    this.isShowLink2 = true;
    this.isShowLink1 = false;
    this.isShowLink3 = false;
    this.isShowLink4 = false;
    this.isShowLink5 = false;
    this.isShowLink6 = false;
    this.isShowLink7 = false;
  }
  toggleLink3() {
    this.isShowLink3 = true;
    this.isShowLink1 = false;
    this.isShowLink2 = false;
    this.isShowLink4 = false;
    this.isShowLink5 = false;
    this.isShowLink6 = false;
    this.isShowLink7 = false;
  }
  toggleLink4() {
    this.isShowLink4 = true;
    this.isShowLink1 = false;
    this.isShowLink2 = false;
    this.isShowLink3 = false;
    this.isShowLink5 = false;
    this.isShowLink6 = false;
    this.isShowLink7 = false;
  }
  toggleLink5() {
    this.isShowLink4 = false;
    this.isShowLink1 = false;
    this.isShowLink2 = false;
    this.isShowLink3 = false;
    this.isShowLink5 = true;
    this.isShowLink6 = false;
    this.isShowLink7 = false;
  }
  toggleLink6() {
    this.isShowLink4 = false;
    this.isShowLink1 = false;
    this.isShowLink2 = false;
    this.isShowLink3 = false;
    this.isShowLink5 = false;
    this.isShowLink6 = true;
    this.isShowLink7 = false;
  }
  toggleLink7() {
    this.isShowLink4 = false;
    this.isShowLink1 = false;
    this.isShowLink2 = false;
    this.isShowLink3 = false;
    this.isShowLink5 = false;
    this.isShowLink6 = false;
    this.isShowLink7 = true;
  }
}
