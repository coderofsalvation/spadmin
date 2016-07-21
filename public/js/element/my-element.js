var myResource = function(){

  this.createdCallback = function(){
    console.log('here I am ^_^ ');
    console.log('with content: ', this.textContent);
  }

  this.attachedCallback = function(){
    console.log('live on DOM ;-) ');
    this.innerHTML = "foo"
  }

  this.detachedCallback = function(){
    console.log('leaving the DOM :-( )');
  }

  this.attributeChangedCallback = function( name, previousValue, value ){
    if (previousValue == null) {
      console.log(
        'got a new attribute ', name,
        ' with value ', value
      );
    } else if (value == null) {
      console.log(
        'somebody removed ', name,
        ' its value was ', previousValue
      );
    } else {
      console.log(
        name,
        ' changed from ', previousValue,
        ' to ', value
      );
    }
  }

}

Spadmin.prototype.registerElement("resource", new myResource )
