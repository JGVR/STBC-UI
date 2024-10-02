interface MemberStruct{
    memberId: string,
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
    memberId: string
    firstName: string
    middleName?: string
    lastName: string
    title?: string
    shortBio?: string
    imageUrl?: string
    targetScreen?: string
    startDate?: string
    endDate?: string

    constructor({memberId, firstName, middleName="", lastName, title="", shortBio="", imageUrl="", targetScreen="", startDate="", endDate=""}: MemberStruct){
        this.memberId = memberId
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