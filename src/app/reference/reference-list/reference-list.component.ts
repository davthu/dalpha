import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
  selector: 'app-reference-list',
  templateUrl: './reference-list.component.html',
  styleUrls: ['./reference-list.component.scss'],
})
export class ReferenceListComponent implements OnInit {
  reference$ = this.srs.available$.pipe(
    map((routeList) =>
      routeList.filter((route: ScullyRoute) =>
        route.route.startsWith(`/reference/`)
      )
    ),
    tap((data) => {
      console.log(data);
    })
  );

  constructor(private srs: ScullyRoutesService) {}

  ngOnInit(): void {}
}
