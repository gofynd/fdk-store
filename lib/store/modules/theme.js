import { fetchAppliedTheme, fetchPage, fetchThemeById, dragSection, addSection, removeSection, updateSection, setTheme, setGlobalConfig, } from "../slices/theme";
export class ThemeModule {
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
    setTheme(params) {
        return this.dispatch(setTheme(params));
    }
    setGlobalConfig(params) {
        return this.dispatch(setGlobalConfig(params));
    }
}
//# sourceMappingURL=theme.js.map