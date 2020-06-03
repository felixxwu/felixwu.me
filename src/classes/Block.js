export default class Block {
    constructor(args
        // lines, 
        // isLong = false, 
        // callback = () => {},
        // progress = 0,
        // clear = false,
    ) {

        this.lines = args.lines;
        this.isLong = args.isLong ? args.isLong : false;
        this.callback = args.callback ? args.callback : () => {};
        this.progress = args.progress ? args.progress : 0;
        this.clear = args.clear ? args.clear : false;
    }
}