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
        workName: "Applications Designer",
        workPlace: "Freelancer",
        mission: "Web and desktop applications Designed.",
        startDate: "2019",
        endtDate: "Persent"
    },
    {
        id: 1,
        workName: "Applications Developer",
        workPlace: "Freelancer",
        mission: "Web and desktop applications Development.",
        startDate: "2017",
        endtDate: "Persent"
    },
    {
        id: 2,
        workName: "Development of e-business and desktop applications",
        workPlace: "Swaida Health Directorate / Informatics Department",
        mission: "Development of e-business and desktop applications.",
        startDate: "2017",
        endtDate: "Persent"
    },
    {
        id: 3,
        workName: "Database systems management",
        workPlace: "Swaida Health Directorate / Informatics Department",
        mission: "Database systems management.",
        startDate: "2016",
        endtDate: "Persent"
    },
    {
        id: 4,
        workName: "IT support",
        workPlace: "Swaida Health Directorate / Informatics Department",
        mission: "IT support.",
        startDate: "2015",
        endtDate: "2019"
    }
]