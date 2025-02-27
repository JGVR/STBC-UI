interface Layout{
    height: string
    width: string
    position?: string
    top?: string
    bottom?: string
    left?: string
    right?: string
    size?: string
    color?: string
    border?: string
    opacity?: string
};

export default class ComponentLayout{
    height: string
    width: string
    position: string
    top: string
    bottom: string
    left: string
    right: string
    size: string
    color: string
    border: string
    opacity: string
 
    constructor({height, width, position="", top="", bottom="", left="", right="", size="", color="", border="", opacity=""}: Layout){
        this.height = height;
        this.width = width;
        this.position = position;
        this.top = top;
        this.bottom = bottom;
        this.left = left;
        this.right = right;
        this.size = size;
        this.color = color;
        this.border = border;
        this.opacity = opacity;
    }
};