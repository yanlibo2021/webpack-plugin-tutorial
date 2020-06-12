class HelloWorld {
    constructor(options) {
        this.options = options;
    }

    apply(compiler) {
        compiler.plugin("done", () => {
            console.log(this.options.message);
        })
    }
}

module.exports = HelloWorld;