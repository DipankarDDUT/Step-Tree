import { Component, ComponentFactory, ComponentFactoryResolver, Directive, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { StepComponent } from './step/step.component';
import { data } from './test';


// @Directive({selector: 'app-step'})
// class StepComponent {
// }


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // directives: [StepComponent]
})
export class AppComponent implements OnInit {
 
  @ViewChild('test', { read: ViewContainerRef, static: true }) test!: ViewContainerRef;
  
  // @ViewChild(StepComponent, { static: true }) steptest: StepComponent = new StepComponent;

  // @ViewChild(StepComponent, { static: true }) steptest: StepComponent = new StepComponent;

  
  componentFactory!: ComponentFactory<StepComponent>;

  ngOnInit(): void {
    let stepNode:any;
    data.forEach((node)=>{

             stepNode=this.test.createComponent(this.componentFactory);
            stepNode.instance.nodeStep=node;
            let parent;// for parent reference
            if(node.nodes){
              node.nodes.forEach((node2)=>{// let stepChildNode=this.test.createComponent(this.componentFactory);
              // let step=stepNode[1];//createComponent(this.componentFactory);
              // step.instance.nodeStep=node;
              // console.log(stepNode.injector.get);
              // console.log(stepNode.location)
              // let stepChildNode=this.test.createComponent(this.componentFactory);
              // let i=stepNode.instance.nodeStep;
              // stepChildNode.instance.nodeStep;
              // addC
              // this.steptest.addComponent(node2);
              // this.child.addComponent(node2)
              parent =stepNode;
              stepNode.instance.addComponent(node2,stepNode)
            })
            // stepNode.instance.nodeStep=node;
          
          }

    })
    
stepNode=parent;
  }

  
  constructor(
    private ngComponentFactoryResolver: ComponentFactoryResolver
  ){


    this.componentFactory = this.ngComponentFactoryResolver.resolveComponentFactory(StepComponent);


  }



}
