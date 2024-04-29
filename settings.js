export const GAME_SETTINGS = {
    timeLeftSetting: 90,

    CANVAS: {
        width: window.innerWidth,
        height: window.innerHeight
    },

    BALLS: {
        radius: 60,
        maxNumberOnCanvas: 10,
        speedMultiplier: 1.6,
        bonusProbability: 0.2
    },

    SCORING: {
        baseScore: 1,
        bonusScore: 5,
        bonus: 0.1,
        penalty: -1
    },

    CONFETTI: {
        velocity: 8,
        alphaDecay: 1.3
    }
};
