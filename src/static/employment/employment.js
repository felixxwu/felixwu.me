import parse from "../../util/parse.js";
import store from "../../store.js";

export default () => {
    store.dispatch("pushBlock", parse(
        `$h1 EMPLOYMENT

        School of Engineering IT Team Intern (Summer 2019)
        $cmd engineering

        Chess Robot Group Project (2019)
        $cmd chess

        Room Acoustics Simulation Intern (Summer 2015)
        $cmd acoustics

        Spacex Hyperloop Student Competition (2016 / 17)
        $cmd hyperloop

        TrapIt Website Design (Freelance, 2018)
        $cmd trapit
        
        Viola Da Gamba Society Website Redesign (Freelance, 2016)
        $cmd vdgs

        Parents' Evening Modelling and Proposal (2016)
        $cmd parents

        $b Back to home
        $cmd home
        `
    ))
}