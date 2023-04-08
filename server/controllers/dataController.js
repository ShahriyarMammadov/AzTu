const aboutSchema = require("../models/aboutModels");

//---------------------- Get User By ID -----------------------------
module.exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await aboutSchema.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
//-------------------------------------------------------------------

//---------------------- addedFexriDoktor----------------------------
module.exports.addedFexriDoktor = async (req, res) => {
  const { image, text, date, name } = req.body;

  try {
    const about = await aboutSchema.findOne({ email: "adminadmin@gmail.com" });

    about.data.fexriDoktorlar.push({
      name: name,
      date: date,
      image: image,
      text: text,
    });

    await about.save();
    res.status(200);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
//-------------------------------------------------------------------
module.exports.addedfexriMezun = async (req, res) => {
  const { text, name } = req.body;

  try {
    const about = await aboutSchema.findOne({ email: "adminadmin@gmail.com" });

    about.data.fexriMezunlar.push({
      name: name,
      text: text,
    });

    await about.save();
    res.status(200);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
//-------------------------------------------------------------------
//-------------------------------------------------------------------
module.exports.addedQehremanlarimiz = async (req, res) => {
  const {
    image,
    name,
    sehidOlduguTarix,
    birthday,
    ixtisasi,
    qrup,
    bitirdiyiİl,
    rutbe,
    teltifleri,
  } = req.body;

  try {
    const about = await aboutSchema.findOne({ email: "adminadmin@gmail.com" });

    about.data.qehremanlarimiz.push({
      image: image,
      name: name,
      sehidOlduguTarix: sehidOlduguTarix,
      birthday: birthday,
      ixtisasi: ixtisasi,
      qrup: sehidOlduguTarix,
      bitirdiyiİl: bitirdiyiİl,
      rutbe: rutbe,
      teltifleri: teltifleri,
      qrup: qrup,
    });

    await about.save();
    res.status(200);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
//-------------------------------------------------------------------
module.exports.addedSabiqRektorlarimiz = async (req, res) => {
  const { image, name, text } = req.body;

  try {
    const about = await aboutSchema.findOne({ email: "adminadmin@gmail.com" });

    about.data.sabiqrektorlar.push({
      image: image,
      name: name,
      text: text,
    });

    await about.save();
    res.status(200);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
//-------------------------------------------------------------------
//-------------------------------------------------------------------
module.exports.addedProrektor = async (req, res) => {
  const { image, name, text } = req.body;

  try {
    const about = await aboutSchema.findOne({ email: "adminadmin@gmail.com" });

    about.data.prorektorlar.push({
      image: image,
      name: name,
      text: text,
    });

    await about.save();
    res.status(200);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
//-------------------------------------------------------------------

// GET

//-------------------------------------------------------------------
module.exports.getFexriDoktorlarimiz = async (req, res) => {
  try {
    const about = await aboutSchema.findOne({ email: "adminadmin@gmail.com" });
    res.status(200).json(about.data.fexriDoktorlar);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
//-------------------------------------------------------------------
//-------------------------------------------------------------------
module.exports.getSabiqRektorlarimiz = async (req, res) => {
  try {
    const about = await aboutSchema.findOne({ email: "adminadmin@gmail.com" });
    res.status(200).json(about.data.sabiqrektorlar);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
//-------------------------------------------------------------------
//-------------------------------------------------------------------
module.exports.getQehremanlarimiz = async (req, res) => {
  try {
    const about = await aboutSchema.findOne({ email: "adminadmin@gmail.com" });
    res.status(200).json(about.data.qehremanlarimiz);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
//-------------------------------------------------------------------
//-------------------------------------------------------------------
module.exports.getFexriMezunlar = async (req, res) => {
  try {
    const about = await aboutSchema.findOne({ email: "adminadmin@gmail.com" });
    res.status(200).json(about.data.fexriMezunlar);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
//-------------------------------------------------------------------
//-------------------------------------------------------------------
module.exports.getProrektorlar = async (req, res) => {
  try {
    const about = await aboutSchema.findOne({ email: "adminadmin@gmail.com" });
    res.status(200).json(about.data.prorektorlar);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
//-------------------------------------------------------------------
