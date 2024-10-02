interface ClassStruct{
    memberIds: string[]
    name: string,
    ages?: string,
    imageUrl: string,
    targetScreen?: string,
    startDate?: string,
    endDate?: string
}

export default class ChurchClass{
    memberIds: string[]
    name: string
    ages?: string
    imageUrl: string
    targetScreen?: string
    startDate?: string
    endDate?: string

    constructor({memberIds, name, ages="", imageUrl, targetScreen="", startDate="", endDate=""}: ClassStruct){
        this.memberIds = memberIds;
        this.name = name;
        this.ages = ages;
        this.imageUrl = imageUrl;
        this.targetScreen = targetScreen;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}