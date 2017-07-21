import {Component, OnInit} from 'angular2/core';
import {StartComponent} from "./start.component";
import {GameComponent} from "./game.component";
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {Router} from "angular2/router";

@Component({
  selector: 'my-app',
  template: `
    <section class="main-section">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1 class="text-center">Hangman game</h1>
            <router-outlet></router-outlet>
            <div class="nav-section">
              <button class="btn btn-primary" *ngIf="status" (click)="btnClicked1()">Start Game</button>
              <button class="btn btn-primary" *ngIf="!status" (click)="btnClicked2()">Try Again</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  directives: [StartComponent, GameComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path: '/page1', name: 'StartPage', component: StartComponent, useAsDefault: true},
  {path: '/page2', name: 'GamePage', component: GameComponent}
])

export class AppComponent implements OnInit{
  public status: boolean;
  ngOnInit():any {
    this.status = true;
    this._router.navigate(['StartPage']);
  }
  constructor(private _router: Router){}
  btnClicked1(){
    this.status = false;
    this._router.navigate(['GamePage']);
  }
  btnClicked2(){
    this.status = true;
    this._router.navigate(['StartPage']);  
  }
}