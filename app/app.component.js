System.register(['angular2/core', "./start.component", "./game.component", "angular2/router"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, start_component_1, game_component_1, router_1, router_2;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (start_component_1_1) {
                start_component_1 = start_component_1_1;
            },
            function (game_component_1_1) {
                game_component_1 = game_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_router) {
                    this._router = _router;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.status = true;
                    this._router.navigate(['StartPage']);
                };
                AppComponent.prototype.btnClicked1 = function () {
                    this.status = false;
                    this._router.navigate(['GamePage']);
                };
                AppComponent.prototype.btnClicked2 = function () {
                    this.status = true;
                    this._router.navigate(['StartPage']);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <section class=\"main-section\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <h1 class=\"text-center\">Hangman game</h1>\n            <router-outlet></router-outlet>\n            <div class=\"nav-section\">\n              <button class=\"btn btn-primary\" *ngIf=\"status\" (click)=\"btnClicked1()\">Start Game</button>\n              <button class=\"btn btn-primary\" *ngIf=\"!status\" (click)=\"btnClicked2()\">Try Again</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  ",
                        directives: [start_component_1.StartComponent, game_component_1.GameComponent, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/page1', name: 'StartPage', component: start_component_1.StartComponent, useAsDefault: true },
                        { path: '/page2', name: 'GamePage', component: game_component_1.GameComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_2.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0NBO2dCQU1FLHNCQUFvQixPQUFlO29CQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7Z0JBQUUsQ0FBQztnQkFKdEMsK0JBQVEsR0FBUjtvQkFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDO2dCQUVELGtDQUFXLEdBQVg7b0JBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkFDRCxrQ0FBVyxHQUFYO29CQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBeENIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSxrbEJBZVQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsZ0NBQWMsRUFBRSw4QkFBYSxFQUFFLDBCQUFpQixDQUFDO3FCQUMvRCxDQUFDO29CQUVELG9CQUFXLENBQUM7d0JBQ1gsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBQzt3QkFDbEYsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUM7cUJBQzdELENBQUM7O2dDQUFBO2dCQWlCRixtQkFBQztZQUFELENBZkEsQUFlQyxJQUFBO1lBZkQsdUNBZUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7U3RhcnRDb21wb25lbnR9IGZyb20gXCIuL3N0YXJ0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0dhbWVDb21wb25lbnR9IGZyb20gXCIuL2dhbWUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlQ29uZmlnfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxzZWN0aW9uIGNsYXNzPVwibWFpbi1zZWN0aW9uXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzcz1cInRleHQtY2VudGVyXCI+SGFuZ21hbiBnYW1lPC9oMT5cclxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2LXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKm5nSWY9XCJzdGF0dXNcIiAoY2xpY2spPVwiYnRuQ2xpY2tlZDEoKVwiPlN0YXJ0IEdhbWU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKm5nSWY9XCIhc3RhdHVzXCIgKGNsaWNrKT1cImJ0bkNsaWNrZWQyKClcIj5UcnkgQWdhaW48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgYCxcclxuICBkaXJlY3RpdmVzOiBbU3RhcnRDb21wb25lbnQsIEdhbWVDb21wb25lbnQsIFJPVVRFUl9ESVJFQ1RJVkVTXVxyXG59KVxyXG5cclxuQFJvdXRlQ29uZmlnKFtcclxuICB7cGF0aDogJy9wYWdlMScsIG5hbWU6ICdTdGFydFBhZ2UnLCBjb21wb25lbnQ6IFN0YXJ0Q29tcG9uZW50LCB1c2VBc0RlZmF1bHQ6IHRydWV9LFxyXG4gIHtwYXRoOiAnL3BhZ2UyJywgbmFtZTogJ0dhbWVQYWdlJywgY29tcG9uZW50OiBHYW1lQ29tcG9uZW50fVxyXG5dKVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICBwdWJsaWMgc3RhdHVzOiBib29sZWFuO1xyXG4gIG5nT25Jbml0KCk6YW55IHtcclxuICAgIHRoaXMuc3RhdHVzID0gdHJ1ZTtcclxuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ1N0YXJ0UGFnZSddKTtcclxuICB9XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpe31cclxuICBidG5DbGlja2VkMSgpe1xyXG4gICAgdGhpcy5zdGF0dXMgPSBmYWxzZTtcclxuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ0dhbWVQYWdlJ10pO1xyXG4gIH1cclxuICBidG5DbGlja2VkMigpe1xyXG4gICAgdGhpcy5zdGF0dXMgPSB0cnVlO1xyXG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnU3RhcnRQYWdlJ10pOyAgXHJcbiAgfVxyXG59Il19
