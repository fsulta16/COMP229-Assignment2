"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayClothingListPage = void 0;
const clothing_1 = __importDefault(require("../Models/clothing"));
function DisplayClothingListPage(req, res, next) {
    clothing_1.default.find(function (err, clothing) {
        if (err) {
            return console.error(err);
        }
        console.log(clothing);
    });
}
exports.DisplayClothingListPage = DisplayClothingListPage;
//# sourceMappingURL=clothing.js.map