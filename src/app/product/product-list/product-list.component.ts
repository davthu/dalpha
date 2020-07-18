import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  product$ = this.srs.available$.pipe(
    map((routeList) =>
      routeList.filter((route: ScullyRoute) =>
        route.route.startsWith(`/product/`)
      )
    ),
    tap((data) => {
      console.log(data);
    })
  );

  constructor(private srs: ScullyRoutesService) {}

  ngOnInit(): void {}
}
