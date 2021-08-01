import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";
import Edit from "./edit";
import save from "./save";

registerBlockType("altblocks/listitem", {
	apiVersion: 2,
	edit: Edit,
	save,
});
