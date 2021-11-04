const Product = require('../models/product.model');
const multer = require('multer');
const fs = require('fs');
const { getErrorMessage } = require('../helper/dbErrorHandler');

// exports.CreateProduct = async (req, res) => {
//   let form = new formidable.IncomingForm();
//   form.keepExtensions = true;
//   // const host = '127.0.0.1:8080' //change to default host
//   form.parse(req, async (err, fields, files) => {
//     if (err)
//       return res
//         .status(400)
//         .json({ error: 'Product could not be uploaded, Try again later' });
//     let product = new Product(fields);
//     if (files.thumb) {
//       console.log(files);
//       product.thumb.data = fs.readFileSync(files.thumb.filepath);
//       product.thumb.contentType = files.thumb.mimetype;
//       product.thumb.path = files.thumb.filepath;
//     }
//     try {
//       let result = await product.save();
//       if (
//         files.thumb.mimetype === 'image/jpeg' ||
//         files.thumb.mimetype === 'image/png' ||
//         files.thumb.mimetype === 'image/jpg' ||
//         files.thumb.mimetype === 'image/JPG'
//       ) {
//         return res
//           .status(200)
//           .json({ msg: 'Product Added Successfully', result });
//       } else return res.status(400).json({ msg: 'Invalid File format' });
//     } catch (err) {
//       console.log(err);
//       res.status(400).json({ error: err.message });
//     }
//   });
// };

exports.CreateProduct = async (req, res) => {
  const host = '127.0.0.1:8080'; //change to your default host address

  const filename = req.file.filename;

  if (!req.body || !req.file)
    return res.status(400).json({ error: 'Fill in missing field' });
  const productLink = `${req.file.path}`;
  const { name, category, price, cpu, ram, raid, speed, ip, storage } =
    req.body;

  const product = new Product({
    name,
    category,
    price,
    CPU: cpu,
    Raid: raid,
    RAM: ram,
    speed,
    IP: ip,
    storage,
    thumb: productLink,
  });

  return product
    .save()
    .then((data) => {
      return res.status(200).json({ status: 'OK', product });
    })
    .catch((err) => {
      return res.status(400).json({ error: err.message });
    });
};

exports.ListProduct = async (req, res) => {
  try {
    const response = await Product.find();
    // console.log(response);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error.message });
  }
};
