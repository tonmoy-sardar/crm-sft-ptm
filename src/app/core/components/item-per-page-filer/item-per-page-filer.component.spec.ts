import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPerPageFilerComponent } from './item-per-page-filer.component';

describe('ItemPerPageFilerComponent', () => {
  let component: ItemPerPageFilerComponent;
  let fixture: ComponentFixture<ItemPerPageFilerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPerPageFilerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPerPageFilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
