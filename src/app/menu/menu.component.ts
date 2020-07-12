import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  title = 'dalpha';
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(MenuDialogComponent, {
      width: '100vw',
      maxWidth: '100vw',
      height: '100vh',
      restoreFocus: false,
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'app-menu-dialog',
  templateUrl: 'menu-dialog.component.html',
})
export class MenuDialogComponent {
  links = [
    { path: '/', icon: 'home', title: 'Home' },
    { path: '/about', icon: 'view_list', title: 'Om oss' },
  ];
}
