import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZitatEinfuegen } from './zitat-einfuegen';

describe('ZitatEinfuegen', () => {
  let component: ZitatEinfuegen;
  let fixture: ComponentFixture<ZitatEinfuegen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZitatEinfuegen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZitatEinfuegen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
