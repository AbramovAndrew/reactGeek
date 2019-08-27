const loop = (times = 0, callback = null) => {
    if (typeof(callback) === 'function') {
        console.log(typeof(callback));
        for (let i = 0; i < times; i++) {
            callback();
        }
    }
};

loop(2, function() {
    console.log('yes 2 times');
});

loop(2);
loop(0);
loop(0, undefined);

loop(0, function() {
    console.log('no 0 times');
});

