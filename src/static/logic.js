import commands from "./commands.js";

export default {
    profile: () => commands.profile(),
    work_experience: () => commands.work(),
    personal_projects: () => commands.projects(),
    university_courses: () => commands.courses(),
    technical_skills: () => commands.skills(),
    clear: () => {
        commands.clear();
        commands.showInput();
    },
    reboot: () => {
        commands.clear();
        commands.startup();
    },
    change_theme: () => commands.theme(),
    help: () => commands.help(),
    "?": () => commands.help(),
    about: () => commands.about()
};
