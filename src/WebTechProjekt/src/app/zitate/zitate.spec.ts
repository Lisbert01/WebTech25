import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zitate } from './zitate';

describe('Zitate', () => {
  let component: Zitate;
  let fixture: ComponentFixture<Zitate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Zitate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Zitate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
