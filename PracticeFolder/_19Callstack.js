function foo() {
    console.log('foo');
  }
  
  function bar() {
    console.log('bar');
    foo();
  }
  
  function baz() {
    console.log('baz');
    bar();
  }
  
  baz();
  