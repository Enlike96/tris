import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrisComponent } from './tris.component';

describe('TrisComponent', () => {
  let component: TrisComponent;
  let fixture: ComponentFixture<TrisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrisComponent]
    });
    fixture = TestBed.createComponent(TrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
