import csso from "postcss-csso";
import atImport from "postcss-import";
import inlineSvg from "postcss-inline-svg";
import nesting from "postcss-nesting";

export default {
  plugins: [atImport(), nesting(), inlineSvg(), csso()],
};
