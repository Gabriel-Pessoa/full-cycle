interface Category {

}

class DramaCategory implements Category {

}

// Errado
class MovieB {
    private category: DramaCategory;

    constructor() {}

    getCategory() {
        return new DramaCategory();
    }

    setCategory(category: DramaCategory) {
        this.category = category;
    }
}

// Certo
class MovieC {
    private category: Category;

    constructor(category: Category) {
        this.category = category;
    }

    getCategory() {
        this.category;
    }

    setCategory(category: Category) {
        this.category = category;
    }
}