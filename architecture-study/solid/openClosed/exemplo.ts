// Fere Princípio de Open closed
class Video1 {
    private type: string;

    public calculaInteresse() {
        if (this.type === 'Movie') {
            //...
        } else if (this.type === 'TVShow') {
            //...
        }
    }
}

abstract class Video {
    abstract calculaInteresse();
}

class Movie extends Video {
    public calculaInteresse() {
        // ...
    }
}

class TVShow extends Video {
    public calculaInteresse() {
        // ...
    }
}