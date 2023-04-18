const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

router.post("/score", async (req, res) => {
	try {
		const filter = { email: req.body.email };
		const options = { upsert: true };

		const updateDoc = {
			$set: {
			  score: req.body.score
			},
		  };

		const user = await User.updateOne(filter, updateDoc, options);
		res.status(201).send({ message: "Score saved successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

router.post("/get-score", async (req, res) => {
	try {
		const query = { email: req.body.email };

		console.log(query)

		const user_data = await User.findOne(query);
		res.status(201).send({score: user_data, message: "Score retreived successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;
