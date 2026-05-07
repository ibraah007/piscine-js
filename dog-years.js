function dogYears (planet,seconds) {
const earth seconds=31,557,600

    const periods = {
        earth: 1.0,
        mercury: 0.2408467,
        venus: 0.61519726,
        mars: 1.8808158,
        jupiter: 11.862615,
        saturn: 29.447498,
        uranus: 84.016846,
        neptune: 164.79132
    };

const earthYears = seconds/earthSeconds;
const planetYears= earthyears/periods[planet];
const dogYears = planetYears * 7;

return Number(dogYears.toFixed(2));




}
