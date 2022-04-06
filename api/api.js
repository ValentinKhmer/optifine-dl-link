const axios = require("axios").default;
const { load } = require("cheerio");

export default async (req, res) => {
	const mc = req.query.mc;
	const of = req.query.of;

	/* It's checking if the query parameters are missing. */
	if (!mc || !of)
		res.status(200).json({
			status: false,
			reason: "Missing Query Parameter(s).",
		});

	const linkRes = await axios.get(
		`https://optifine.net/adloadx?f=OptiFine_${mc}_HD_U_${of}.jar`
	);
	const $ = load(linkRes.data);
	const path = $("tbody")
		.eq(0)
		.children()
		.children()
		.eq(1)
		.children()
		.children()
		.children()
		.children()
		.eq(1)
		.children("table")
		.children("tbody")
		.children("tr")
		.eq(1)
		.children("td")
		.children("span")
		.children("a")
		.attr("href");

	/* It's checking if the file is valid. */
	const valid =
		(await (
			await axios.get(`https://optifine.net/${path}`, {
				timeout: 800,
			})
		).headers["content-type"]) === "application/java-archive"
			? true
			: false;

	if (valid) {
		res.status(200).json({
			status: true,
			url: `https://optifine.net/${path}`,
		});
	} else {
		res.status(200).json({
			status: false,
			reason: "Bad Query Parameter(s).",
		});
	}
};
