import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';

import { LikeWidgetComponent } from './like-widget.component';

describe(LikeWidgetComponent.name, () => {
  let component: LikeWidgetComponent;
  let fixture: ComponentFixture<LikeWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LikeWidgetComponent],
      providers: [UniqueIdService],
      imports: [FontAwesomeModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it('Should auto-generate ID during ngOnInput when (@Input id) is not assigned', () => {
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('Should auto-generate ID during ngOnInput when (@Input id) is assigned', () => {
    const someId = 'someId';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });

  it(`${LikeWidgetComponent.prototype.like.name} should trigger (@Output liked) when called with subscribe and done`, (done) => {
    fixture.detectChanges();
    component.liked.subscribe(() =>{
      expect(true).toBeTruthy();
      done();
    })
    component.like();
  });

  it(`${LikeWidgetComponent.prototype.like.name} should trigger (@Output liked) when called`, () => {
    spyOn(component.liked,'emit')
    fixture.detectChanges();
    component.like();
    expect(component.liked.emit).toHaveBeenCalled()
  });
});
