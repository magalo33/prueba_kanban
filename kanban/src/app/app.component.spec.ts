import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'kanban'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('kanban');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent)
    .toContain('kanban app is running!');
  });


  /*  it('should return expected heroes (HttpClient called once)', () => {
    const expectedEstados = [
      { idestado: 1, name: 'por_hacer' },
      { idestado: 2, name: 'en_proceso' },
      { idestado: 3, name: 'hecho' }
    ];

    let seguridadService = new SeguridadService();
    let resourcesService = new ResourcesService;
    const router: Router = TestBed.get(Router);
    let component = new LoginComponent(seguridadService,new BackendService((jasmine.createSpyObj('HttpClient', ['get'])) as any),resourcesService,router);
    component.cargarEstados();


       expect(httpClientSpy.li);
       expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');*/


});
