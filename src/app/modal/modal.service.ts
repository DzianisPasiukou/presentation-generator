import {
    AfterViewInit,
    ApplicationRef,
    ComponentFactory,
    ComponentFactoryResolver, ComponentRef, EventEmitter,
    Injectable,
    OnInit, Type,
    ViewContainerRef
} from '@angular/core';
import {ModalComponent} from './modal/modal.component';
import {AppComponent} from '../app.component';
import {IModalConfig} from './IModalConfig';

@Injectable()
export class ModalService implements OnInit {

    private readonly factory: ComponentFactory<ModalComponent>;
    private appViewRef: ViewContainerRef;
    private modalComponentRef: ComponentRef<ModalComponent>;

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
                private appRef: ApplicationRef) {
        this.factory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
    }

    private destroy = (() => {
        this.modalComponentRef.location.nativeElement.removeEventListener('click', this.destroy);
        this.modalComponentRef.destroy();
    });

    public open<T>(component, data: any, config?: IModalConfig): T {
        this.appViewRef = (this.appRef.components[0].instance as AppComponent).appRef;
        this.appViewRef.clear();
        this.modalComponentRef = this.appViewRef.createComponent(this.factory);
        const factory = this.componentFactoryResolver.resolveComponentFactory(component);
        const componentRef = this.modalComponentRef.instance.template.createComponent(factory);
        for (const key in data) {
            if (data.hasOwnProperty(key) && componentRef.instance.hasOwnProperty(key)) {
                componentRef.instance[key] = data[key];
            }
        }
        for (const key in config) {
            if (config.hasOwnProperty(key) && this.modalComponentRef.instance.hasOwnProperty(key)) {
                this.modalComponentRef.instance[key] = config[key];
            }
        }
        this.modalComponentRef.location.nativeElement.addEventListener('click', this.destroy);
        componentRef.instance['close'] &&
        componentRef.instance['close'] instanceof EventEmitter &&
        componentRef.instance['close'].subscribe(this.destroy);
        return <T>componentRef.instance;
    }

    ngOnInit(): void {
    }
}
