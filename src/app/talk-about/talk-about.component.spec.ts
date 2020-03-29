import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkAboutComponent } from './talk-about.component';

describe('TalkAboutComponent', () => {
  let component: TalkAboutComponent;
  let fixture: ComponentFixture<TalkAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalkAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
