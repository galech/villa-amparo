import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupEditionComponent } from './group-edition.component';

describe('GroupEditionComponent', () => {
  let component: GroupEditionComponent;
  let fixture: ComponentFixture<GroupEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
