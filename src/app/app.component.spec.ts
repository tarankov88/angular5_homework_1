import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
        })
            .compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
        // tslint:disable-next-line
        const app = fixture.debugElement.componentInstance;
        expect(app)
            .toBeTruthy();
    }));
    it(`should have as title 'app'`, async(() => {

        const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
        // tslint:disable-next-line
        const app = fixture.debugElement.componentInstance;
        expect(app.title)
            .toEqual('app');
    }));
    it('should render title in a h1 tag', async(() => {
        const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        // tslint:disable-next-line
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent)
            .toContain('Welcome to app!');
    }));
});
