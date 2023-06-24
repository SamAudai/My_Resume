export interface Ieducation {
    id: number;
    university: string;
    certificate: string;
    spacialize: string;
    image: string;
    gba: string;
    startDate: string;
    graduatetDate: string;
}

export const EDUCATION: Array<Ieducation> = [

    {
        id: 0,
        university: "University of Damascus",
        certificate: "Bachelor in Information Technology Engineering",
        spacialize: "Software Engineering",
        image: "",
        gba: "2.75",
        startDate: "2014",
        graduatetDate: "2019"
    },
    {
        id: 1,
        university: "Technical Institute for Applied Industries",
        certificate: "Diploma in Electron Sciences",
        spacialize: "Industrial Electronics",
        image: "",
        gba: "3",
        startDate: "2004",
        graduatetDate: "2006"
    }
]
