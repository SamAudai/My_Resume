export interface IExperience {
    id: number;
    workName: string;
    workPlace: string;
    mission: string;
    startDate: string
    endtDate: string;
}

export const EXPERIENCES: Array<IExperience> = [
    {
        id: 0,
        workName: "UI/UX Designer",
        workPlace: "Cham International Virtual School",
        mission: "Collaborated closely with cross-functional teams including developers and product managers to ensure design alignment with project goals. Implemented consistent design patterns and guidelines to maintain a cohesive user experience across the product.",
        startDate: "1/2023",
        endtDate: "6/2023"
    },
    {
        id: 1,
        workName: "Courses instructor",
        workPlace: "Sun Development Center",
        mission: "Implemented interactive learning activities in training sessions, leading to increased engagement and retention among participants. Collaborated with subject matter experts to update and modernize training materials, resulting in more relevant and up-to-date content.",        
        startDate: "2/2023",
        endtDate: "3/2023"
    },
    {
        id: 2,
        workName: "Software Developer",
        workPlace: "Freelancer",
        mission: "Created a cross-platform desktop application using .NET Core, increasing accessibility for users across Windows, macOS, and Linux.",
        startDate: "2017",
        endtDate: "Persent"
    },
    {
        id: 3,
        workName: "Full Stack Web Developer",
        workPlace: "Freelancer",
        mission: "Designed and implemented interactive and user-friendly front-end interfaces using HTML, CSS, and Angular. Developed and maintained server-side logic, APIs, and databases to support seamless data flow and application functionality. Worked in an Agile development environment, contributing to sprint planning, backlog grooming, and daily standup meetings. Deployed web applications to various hosting environments, monitoring and optimizing performance for optimal user experience.",
        startDate: "2017",
        endtDate: "Persent"
    },
    {
        id: 4,
        workName: "IT Support",
        workPlace: "Freelancer",
        mission: "Proficient in providing technical support and troubleshooting for hardware, software, and network issues.",
        startDate: "2015",
        endtDate: "Persent"
    }
]