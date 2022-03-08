import state from "./state";

export default {
    cssModule(state){
        return state.cssModule
    },
    widgetsList(state){
        return state.widgets;
    },
    UITheme(state){
        return state.theme;
    },
    selectedWidget(){
        return state.selectWidget;
    }
}