import getBlockInfo from "./getBlockInfo";

export default function (clientId) {
	return getBlockInfo(clientId)[0].innerBlocks;
}
