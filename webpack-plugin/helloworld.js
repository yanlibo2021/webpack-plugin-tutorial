class HelloWorld {
    apply(compiler) {
        compiler.plugin("done", () => {
            console.log("Hello world");
        })
    }
}


module.exports = HelloWorld;