export interface Icourses {
    id: number;
    certificate: string;
    university: string;
    website: string;
    date: string;
}

export const COURSES: Array<Icourses> = [
    {
        id: 0,
        certificate: "IBM Full Stack Cloud Developer",
        university: "IBM",
        website: "",
        date: "Persent"
    },
    {
        id: 1,
        certificate: "Data Structures and Algorithms",
        university: "University of California San Diego",
        website: "",
        date: "Persent"
    },
    {
        id: 2,
        certificate: "Google IT Support Professional Certificate",
        university: "Google",
        website: "",
        date: "Persent"
    },
    {
        id: 3,
        certificate: "Software Product Management",
        university: "University of ALBERTA",
        website: "https://www.coursera.org/account/accomplishments/specialization/VTZLZ3JY4S32",
        date: "Jan 8, 2022"
    },
    {
        id: 4,
        certificate: "Full Stack Web Development with Angular",
        university: "The Hong Kong University of Science and Technology",
        website: "https://www.coursera.org/account/accomplishments/specialization/8M493MCTHLHA",
        date: "Aug 12, 2021"
    },
    {
        id: 5,
        certificate: "Introduction to Data Analytics",
        university: "IBM",
        website: "",
        date: "Jul 29, 2021"
    },
    {
        id: 6,
        certificate: "Software Development Lifecycle",
        university: "University of Minnesota",
        website: "https://www.coursera.org/account/accomplishments/specialization/QAVT4N7UXXGM",
        date: "Jul 14, 2021"
    },
    {
        id: 7,
        certificate: "Python for Everybody",
        university: "University of Michigan",
        website: "https://www.coursera.org/account/accomplishments/specialization/RNG23DTEWGHY",
        date: "Jun 11, 2021"
    }
]