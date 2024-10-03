interface MemberStruct{
    id: string,
    firstName: string,
    middleName?: string,
    lastName: string,
    title?: string,
    shortBio?: string,
    imageUrl?: string,
    targetScreen?: string,
    startDate?: string,
    endDate?: string
}

export default class Member{
    id: string
    firstName: string
    middleName?: string
    lastName: string
    title?: string
    shortBio?: string
    imageUrl?: string
    targetScreen?: string
    startDate?: string
    endDate?: string

    constructor({id, firstName, middleName="", lastName, title="", shortBio="", imageUrl="", targetScreen="", startDate="", endDate=""}: MemberStruct){
        this.id = id
        this.firstName = firstName,
        this.middleName = middleName,
        this.lastName = lastName,
        this.title = title,
        this.shortBio = shortBio,
        this.imageUrl = imageUrl,
        this.targetScreen = targetScreen,
        this.startDate = startDate,
        this.endDate = endDate
    }
}