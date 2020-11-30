// Objects Linked to Other Objects
const Foo = {
  init: function(who){
    this.me = who
  },
  identify: function(){
    return "Hello I am " + this.me
  },
  random: function(){
    return 'Hello,' + this.me + ' I am random FOO'
  }
}

const Bar = Object.create(Foo)

Bar.speak = function(){
  return this.me + ` speaking out loud`
}

Bar.random = function(){
    return 'Hello,' + this.me + ' I am random BAR'
  }

Foo.callme = function(){
  return "call me"
}

const b1 = Bar
b1.init('Angelo')
b1.identify()
b1.speak()
b1.callme()
b1.random()

const f1 = Foo
f1.init('f1')
f1.callme()
f1.random()

