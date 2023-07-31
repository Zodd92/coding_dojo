class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head=null;
    }

    addToFront(value){
        var new_node= new Node(value);
        if(this.head==null){
            this.head=new_node;
            return this;
        }
        new_node.next=this.head;
        this.head=new_node;
        return this;
    }
    removeToFront(){
        if(!this.head){
            return this;
        }
        var removeNode=this.head;
        this.head=this.head.next;
        removeNode.next=null;
        return removeNode;
    }
    displayList(){
        if(this.head==null){
            console.log("this is empty");
            return this;
        }
        var runner = this.head;
        while(runner !== null){
            console.log(`Node ${runner.value} `);
            runner=runner.next;
        }
        return this;
    }
}
var mySlL= new SinglyLinkedList();
mySlL.addToFront("sd").addToFront("fgh").addToFront("kl");
mySlL.displayList();
mySlL.removeToFront();
mySlL.displayList();