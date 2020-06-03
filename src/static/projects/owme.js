import parse from "../../util/parse.js";
import store from "../../store.js";

export default () => {
    store.dispatch("pushBlock", parse(
        `
        $h1 OWME

        $bcmd projects
        $bcmd home

        $hr
        
        Owme is the reincarnation of FlatApp, improving on the shortcomings thereof. Now with an additional Google sign-in option, you can interact with anyone on Owme, not just people in your group, and you can create any number of groups with your friends to get a quick overview of your net debt with the group, on top of the debts with individuals. The radically improved design now allows you to easily create a debt with a friend, selection of friends, or group, in a much more intuitive way. The PayPal integration is also improved, taking advantage of the paypal.me system.

        $b Feature overview:
        • A clean and dynamic, single-page design
        • Google sign-in
        • Easily manage your friends and groups
        • Create debts with one or more friends, or a whole group
        • If there are any circles of debt, they are automatically settled up
        • Progressive Web App support
        
        $b Link:
        $lnk https://noxive.com/owme

        $b Preview:
        $img owme.jpg

        $b Related:
        $cmd flatapp
        `,
        {clear: true}
    ))
}