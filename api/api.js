const axios = require("axios").default;
const { load } = require("cheerio");

export default async (req, res) => {
	
	const mc = req.query.mc;
	const op = req.query.op;

	if (!mc && !op)
		return res.status(400);

	(async () => {
		let uri = undefined;

		await new Promise(async (resolve, reject) => {
			await axios
				.get(`https://optifine.net/adloadx?f=OptiFine_${mc}_HD_U_${op}.jar`)
				.then(async (res) => {
					const $ = load(res.data);
					uri = $("tbody")
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
					// .html()
				})
				.then(resolve)
				.catch(reject);
		});
	})();

	res.status(200).json({
		method: req.method,
		query: req.query,
		url: `https://optifine.net/${uri}`
	});
};
