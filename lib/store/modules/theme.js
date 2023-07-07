import { fetchAppliedTheme, fetchPage, fetchThemeById, updateSectionsForPreview } from "../slices/theme";
class themeModule {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    fetchAppliedTheme() {
        return this.dispatch(fetchAppliedTheme());
    }
    fetchThemeById(params = {}) {
        return this.dispatch(fetchThemeById(params));
    }
    fetchPage(params = {}) {
        return this.dispatch(fetchPage(params));
    }
    updateSectionsForPreview(params = {}) {
        return this.dispatch(updateSectionsForPreview(params));
    }
}
export default themeModule;
//# sourceMappingURL=theme.js.map