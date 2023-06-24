export interface Icourses {
    id: number;
    certificate: string;
    university: string;
    image: string;
    date: string;
}

export const COURSES: Array<Icourses> = [
    {
        id: 0,
        certificate: "Data Structures and Algorithms",
        university: "University of California San Diego",
        image: "",
        date: "Persent"
    },
    {
        id: 1,
        certificate: "Google IT Support Professional Certificate",
        university: "Google",
        image: "",
        date: "Persent"
    },
    {
        id: 2,
        certificate: "Software Product Management",
        university: "University of ALBERTA",
        image: "",
        date: "Jan 8, 2022"
    },
    {
        id: 3,
        certificate: "Full Stack Web Development with Angular",
        university: "The Hong Kong University of Science and Technology",
        image: "",
        date: "Aug 12, 2021"
    },
    {
        id: 4,
        certificate: "Introduction to Data Analytics",
        university: "IBM",
        image: "",
        date: "Jul 29, 2021"
    },
    {
        id: 5,
        certificate: "Software Development Lifecycle",
        university: "University of Minnesota",
        image: "",
        date: "Jul 14, 2021"
    },
    {
        id: 6,
        certificate: "Python for Everybody",
        university: "University of Michigan",
        image: "",
        date: "Jun 11, 2021"
    }
]