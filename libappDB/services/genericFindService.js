const findFun = async (res, Model) => {
    try {
        const results = await Model.find();
        if (results.length > 0) {
            res.status(200).json(results);
        } else {
            res.status(404).send("Sorry, No Data Found !");
        }
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).send("Server Error !");
    }
};

const filterFun = async (res, Model, filter) => {
    try {
        const results = await Model.find(filter); // Using filter in the query
        if (results.length > 0) {
            res.status(200).json(results);
        } else {
            res.status(404).send("Sorry, No Data Found !");
        }
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).send("Server Error !");
    }
};

// Exporting both functions properly
module.exports = { findFun, filterFun }
