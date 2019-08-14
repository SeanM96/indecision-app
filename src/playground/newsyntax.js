class OldSyntax {
    constructor() {
        this.name = "name"
    }
}

class NewSyntax {
    name = 'Sean'
    getGreeting = () => { //AUTO BINDED
        return 'Get greeting';
    }
}

const newSyntax = new NetSyntax();