import Tooltip from "./Tooltip.js"

describe("Tooltip", () => {
	const tree = renderer.create(<Tooltip>Content</Tooltip>).toJSON()

	it("Renders correctly", () => expect(tree).toMatchSnapshot())
})
