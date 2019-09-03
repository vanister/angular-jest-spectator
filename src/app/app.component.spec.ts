import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  const createComponent = createComponentFactory({
    component: AppComponent
  });

  let spectator: Spectator<AppComponent>;

  beforeEach(() => spectator = createComponent());

  it('should create the app', () => {
    const app = spectator.component;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-jest-spectator'`, () => {
    const app = spectator.component;
    expect(app.title).toEqual('angular-jest-spectator');
  });

  it('should render title', () => {
    expect(spectator.query('.content span').textContent).toContain('angular-jest-spectator app is running!');
  });
});
