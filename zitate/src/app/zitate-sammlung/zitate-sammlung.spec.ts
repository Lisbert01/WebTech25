import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZitateSammlung } from './zitate-sammlung';

describe('ZitateSammlung', () => {
  let component: ZitateSammlung;
  let fixture: ComponentFixture<ZitateSammlung>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZitateSammlung]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZitateSammlung);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
