// How to use
// let createMessage = (event, next) => {
//   console.log(event)
//   next({step: 1, status: "create message done"});
// }
// let uploadFile = function(event, next) {
//   console.log(event)
//   next({step: 2, status: "upload file done"});
// }
// let updateMessage = function(event, next) {
//   console.log(event)
//   next({step: 3, status: "update message done"});
// }
// let done = function(event, next) {
//   console.log("done", event);
// }
// let uploadProcess = new ProcessTemplate(createMessage, uploadFile, updateMessage, done);
// uploadProcess.start({name: "custom start"});
// uploadProcess.stop();

function ProcessTemplate() {
  this.current = 0;
  this.list = [];
  // Overwrite it outside if you need
  // instance.done = (event) => { code here }
  for (let i = 0; i < arguments.length; i++) {
    // Create method default
    let func = (event = {}, next = () => {}) => {
      if(typeof arguments[i] === "function") return arguments[i](event, next)
    }
    this.list.push(func);
  }

  this.next = (event) => {
    this.current++;
    typeof this.list[this.current] === "function" && this.list[this.current](event, this.next);
  }

  this.start = (event = {}, afterFunc = (event) => {}) => {
    typeof this.list[this.current] === "function" && this.list[this.current](event, this.next);
    afterFunc && afterFunc();
  }

  this.stop = (afterFunc) => {
    this.list.length = 0;
    afterFunc && afterFunc();
  }

  this.restart = (afterFunc) => {
    afterFunc && afterFunc();
  }
}
