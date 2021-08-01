import { select } from "@wordpress/data";

export default function (clientId) {
	return select("core/block-editor").getBlocksByClientId(clientId);
}
