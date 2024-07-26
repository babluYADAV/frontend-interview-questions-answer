Function.prototype.myBind=function(...args){
    const thisRef=this;
    const removeFirstElemtfromargs=args.slice(1);
    return function(...args2){
    thisRef.apply(args[0],[...removeFirstElemtfromargs,...args2])
    }
    }
    
    const shiv1=fullname.myBind(name1,"up")
    
    const ishani1=fullname.myBind(name2,"up")
    