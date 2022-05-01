import { Component, Input, OnInit, ViewChild, ViewContainerRef,ComponentFactory, ComponentFactoryResolver, ComponentRef } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {

  @Input() nodeStep : any;
  // @Input() nodeStep : any;
  @ViewChild('steptest', { read: ViewContainerRef, static: true }) steptest!: ViewContainerRef;
  componentFactory!: ComponentFactory<StepComponent>;


  constructor(
    private ngComponentFactoryResolver: ComponentFactoryResolver
  ){


    this.componentFactory = this.ngComponentFactoryResolver.resolveComponentFactory(StepComponent);


  }



  ngOnInit(): void {
  

  }

  addComponent(data:any,stepNode: ComponentRef<StepComponent>){
    // data = Object.entries(data);

    let childNode:any;
    let parent:any;
      parent=stepNode;
    if( data.nodes){
      //if child node

      //first assign 
       childNode=this.steptest.createComponent(this.componentFactory);
      stepNode=childNode.instance.nodeStep=data;
      //convert child to array
      data = Object.entries(data.nodes);
      stepNode=parent;
      let subparent=childNode;
    data.forEach((node: any)=>{
      // let i=0;
     
      let subChildNode=this.steptest.createComponent(this.componentFactory);
      childNode+=subChildNode.instance.nodeStep=node[1];
    
      //  childNode=this.steptest.createComponent(this.componentFactory);
      // stepNode=childNode.instance.nodeStep=node[1];
      if(node.nodes){
        node.nodes.forEach((node2: any)=>{
      this.addComponent(node2,subChildNode);



})

    }
  });
  childNode=subparent; //after loop append all the child to parent
}
    else{
      //no child node
      childNode=this.steptest.createComponent(this.componentFactory);
      stepNode=childNode.instance.nodeStep=data;
      stepNode=parent;
    }




    // let childNode=this.steptest.createComponent(this.componentFactory);
    // stepNode=childNode.instance.nodeStep=data;
 



  }

  


}
