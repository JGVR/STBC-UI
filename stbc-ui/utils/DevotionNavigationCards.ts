const imageLayout = {
    width: "w-full",
    height: "h-56",
    border: "border-1",
    top: "",
    bottom: "",
    left: "",
    right: "",
}
const textLayout = {
    position: "absolute",
    top: "top-24",
    bottom: "",
    left: "",
    right: "",
    width: "w-26",
    height: "",
    textSize: "text-lg",
    textColor: "text-white"
}
const navigationCards = [
    {
        title: "Monday",
        imageDetail: require('@/assets/icon.png'),
        screenUrl: "/home/about",
        imageLayout: imageLayout,
        textLayout: textLayout
    },
    {
        title: "Tuesday",
        imageDetail: require('@/assets/icon.png'),
        screenUrl: "/home/about",
        imageLayout: imageLayout,
        textLayout: textLayout
    },
    {
        title: "Wednesday",
        imageDetail: require('@/assets/icon.png'),
        screenUrl: "/home/about",
        imageLayout: imageLayout,
        textLayout: textLayout
    },
    {
        title: "Thursday",
        imageDetail: require('@/assets/icon.png'),
        screenUrl: "/home/about",
        imageLayout: imageLayout,
        textLayout: textLayout
    },
    {
        title: "Friday",
        imageDetail: require('@/assets/icon.png'),
        screenUrl: "/home/about",
        imageLayout: imageLayout,
        textLayout: textLayout
    },
    {
        title: "Saturday",
        imageDetail: require('@/assets/icon.png'),
        screenUrl: "/home/about",
        imageLayout: imageLayout,
        textLayout: textLayout
    },
    {
        title: "Sunday",
        imageDetail: require('@/assets/icon.png'),
        screenUrl: "/home/about",
        imageLayout: {
            width: "w-80",
            height: "h-56",
            border: "border-1",
            left: "left-[50%]",
            top: "",
            bottom: "",
            right: ""
        },
        textLayout: {
            position: "absolute",
            top: "top-24",
            bottom: "",
            left: "left-[90%]",
            right: "",
            width: "w-26",
            height: "",
            textSize: "text-lg",
            textColor: "text-white"
        }
    }
]

export default navigationCards;