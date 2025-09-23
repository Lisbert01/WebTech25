import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZitatLoeschen } from './zitat-loeschen';

describe('ZitatLoeschen', () => {
  let component: ZitatLoeschen;
  let fixture: ComponentFixture<ZitatLoeschen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZitatLoeschen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZitatLoeschen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
