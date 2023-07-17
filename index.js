function receivesAFunction(something) {
    return (something());
};

function returnsANamedFunction(){
    return function somethingElse(){console.log("hello")};
};

function returnsAnAnonymousFunction(){
    return (() => console.log("welcome"));
};