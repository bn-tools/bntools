const now = +new Date();

importScripts("/common/array2d.js?" + now, "solver.js?" + now);

let solver = null;

self.onmessage = function (e) {
    console.time(e.data.type);
    switch (e.data.type) {
        case "init": {
            solver = new Solver(e.data.reqs, e.data.options);
            break;
        }

        case "next": {
            const r = solver.next();
            self.postMessage(r);
            break;
        }
    }
    console.timeEnd(e.data.type);
};
