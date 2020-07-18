import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ThemeService } from '../services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  title = 'dalpha';
  isDarkTheme: boolean;
  themes: string[] = ['light-theme', 'dark-theme'];

  constructor(public dialog: MatDialog, private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.isDarkTheme$.subscribe(
      (value) => (this.isDarkTheme = value)
    );
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }

  openDialog() {
    const dialogRef = this.dialog.open(ToolbarDialogComponent, {
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
  selector: 'app-toolbar-dialog',
  templateUrl: 'toolbar-dialog.component.html',
})
export class ToolbarDialogComponent {
  links = [
    { path: '/', title: 'Hem' },
    { path: '/product', title: 'Produkter & tjänster' },
    { path: '/references', title: 'Referenser' },
    { path: '/about', title: 'Om oss' },
  ];
}
