/**
 * Created by hamidhoseini on 9/2/15.
 */
var i = 0;

function timedCount() {
    i = i + 1;
    self.postMessage(i);
    setTimeout("timedCount()",500);
}

self.onmessage = function (event) {
    // run this part whenever someone posts a message
    // access the data sent to the worker as event.data

    i= event.data;
    timedCount();
};
