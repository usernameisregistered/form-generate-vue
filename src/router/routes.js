import selectUI from "../view/selectUI.vue"
import generateLayout from "../view/generateLayout/index.vue"
import generatePage from "../view/generatePage/index.vue"
import previewPage from "../view/previewPage/index.vue"
export default [
    {path: "/selectUI", component: selectUI},
    {path: "/generateLayout", component: generateLayout},
    {path: "/generatePage", component: generatePage},
    {path: "/previewPage", component: previewPage},
];
