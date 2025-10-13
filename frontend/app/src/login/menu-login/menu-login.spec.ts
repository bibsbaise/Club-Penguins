import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLogin } from './menu-login';

describe('MenuLogin', () => {
  let component: MenuLogin;
  let fixture: ComponentFixture<MenuLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
