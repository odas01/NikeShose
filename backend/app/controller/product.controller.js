import ProductService from '../services/product.service.js';
import MongoDB from '../utils/mongodb.util.js';
import ApiError from '../api-error.js';

export const create = async (req, res, next) => {
    if (!req.body?.name) {
        return next(new ApiError(400, 'Chưa nhập dữ liệu'));
    }
    try {
        const productService = new ProductService(MongoDB.client);
        const document = await productService.create(req.body);
        return res.send(document);
    } catch (error) {
        return next(new ApiError(500, 'Error creating product'));
    }
};
export const findAll = async (req, res, next) => {
    let documents = [];
    try {
        const productService = new ProductService(MongoDB.client);
        const { name } = req.body;
        if (name) {
            documents = await productService.findByName(name);
        } else {
            documents = await productService.find({});
        }
    } catch (error) {
        return next(new ApiError(500, 'Error findall product'));
    }
    return res.send(documents);
};
export const findOne = async (req, res, next) => {
    try {
        const productService = new ProductService(MongoDB.client);
        const document = await productService.findById(req.params.id);
        return document
            ? res.send(document)
            : next(new ApiError(500, 'product not found'));
    } catch (error) {
        return next(new ApiError(500, 'Error find product'));
    }
};
export const update = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        return next(new ApiError(400, 'Chưa nhập dữ liệu'));
    }
    try {
        const productService = new ProductService(MongoDB.client);
        const document = await productService.update(req.params.id, req.body);
        return document
            ? res.send(document)
            : next(new ApiError(500, 'product not found'));
    } catch (error) {
        return next(new ApiError(500, 'Error find product'));
    }
};
export const deletee = async (req, res) => {
    try {
        const productService = new ProductService(MongoDB.client);
        const document = await productService.delete(req.params.id);
        return document
            ? res.send(document)
            : next(new ApiError(500, 'product not found'));
    } catch (error) {
        return next(new ApiError(500, 'Error find product'));
    }
};
export const deleteAll = async (req, res, next) => {
    try {
        const productService = new ProductService(MongoDB.client);
        const document = await productService.deleteAll();
        return document
            ? res.send(document)
            : next(new ApiError(500, 'product not found'));
    } catch (error) {
        return next(new ApiError(500, 'Error find product'));
    }
};
export const findAllFavorite = (req, res) => {
    res.send({ message: 'findAllFavorite handler' });
};
