import ChurchClass from "./ChurchClass"

interface SchoolStruct{
    id: number,
    name: string,
    shortDescription?: string,
    description?: string,
    dateOfWeek?: string,
    time?: string,
    imageUrl?: string,
    classes?: ChurchClass[]
}

export default class School{
    id: number
    name: string
    shortDescription?: string
    description?: string
    dateOfWeek?: string
    time?: string
    imageUrl?: string
    classes?: ChurchClass[]

    constructor({id, name, shortDescription="", description="", dateOfWeek="", time="", imageUrl="", classes=[]}: SchoolStruct){
        this.id = id
        this.name = name
        this.shortDescription = shortDescription
        this.description = description
        this.dateOfWeek = dateOfWeek
        this.time = time
        this.imageUrl = imageUrl
        this.classes = classes
    }
}