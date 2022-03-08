import antAesignWidget from '../../widgets/antDesign.json'
export default {
    changeTheme(state, value) {
        state.theme = value;
        switch (value) {
            case "antDesign":
                state.widgets = antAesignWidget
                break;
        }
    },
    changeCSSModule(state, value) {
        state.cssModule = value;
    },
    changeWidget(state, value = null){
        state.selectWidget = value;
    }
}