exports.post = (req,res,next) => {
    res.status(201).send("Request stat sucessec!!");
}

exports.put = (req,res,next) => {
    let id = req.params.id;
    res.status(201).sent(`"Request stat sucessec!!"${id}`);
}

exports.delete = (req,res,next) => {
    let id = req.params.id;
    res.status(200).sent(`"Request stat sucessec!!"${id}`);
}
