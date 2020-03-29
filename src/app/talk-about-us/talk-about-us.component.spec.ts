import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkAboutUsComponent } from './talk-about-us.component';

describe('TalkAboutUsComponent', () => {
  let component: TalkAboutUsComponent;
  let fixture: ComponentFixture<TalkAboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalkAboutUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
