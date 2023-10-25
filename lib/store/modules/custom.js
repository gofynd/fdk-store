import { setValue } from "../slices/custom";
export class CustomModule {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    setValue(key, value) {
        const params = { key, value };
        return this.dispatch(setValue(params));
    }
}
//# sourceMappingURL=custom.js.map