interface VideoC {
    play();
    increaseVolume();
}

class TheLionKingA implements VideoC {
    public play() {
        //...
    }

    public increaseVolume() {
        //...
    }
}

class ModerTimesA implements VideoC {
    public play() {
        //...
    }

    public increaseVolume() {
        // não será utilizado 
    }
}

// Segregando Infertace
interface VideoD {
    play();
}

interface AudioControl {
    increaseVolume();
}

class TheLionKingB implements VideoD, AudioControl {
    public play() {
        //...
    }

    public increaseVolume() {
        //...
    }
}

class ModerTimesB implements VideoD {
    public play() {
        //...
    }
}