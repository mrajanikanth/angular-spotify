import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from '@angular-spotify/web/shared/data-access/auth';

@Component({
  selector: 'as-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  constructor(private authService: AuthService) {}
}
