import { fetchAppliedTheme, fetchPage, fetchThemeById, dragSection, addSection, removeSection, updateSection, } from "../slices/theme";
class themeModule {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    fetchAppliedTheme() {
        return this.dispatch(fetchAppliedTheme());
    }
    fetchThemeById(params) {
        return this.dispatch(fetchThemeById(params));
    }
    fetchPage(params) {
        return this.dispatch(fetchPage(params));
    }
    dragSection(params) {
        return this.dispatch(dragSection(params));
    }
    addSection(params = {}) {
        return this.dispatch(addSection(params));
    }
    removeSection(params = {}) {
        return this.dispatch(removeSection(params));
    }
    updateSection(params = {}) {
        return this.dispatch(updateSection(params));
    }
}
export default themeModule;
//# sourceMappingURL=theme.js.map