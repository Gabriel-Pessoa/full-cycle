class MovieA {
    public play() {
        // ...
    }
    public increaseVolume() {
        // ...
    }
}

class TheLionKing extends MovieA {
    public play() {
        // ...
    }

    public increaseVolume() {
        //...
    }
}

class ModernTimes {
    public play() {
        // ...
    }
}

const movie1: MovieA = new MovieA();
const movie2: MovieA = new TheLionKing();
const movie3: MovieA = new ModernTimes();
